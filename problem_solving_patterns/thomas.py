# This code is to be used in Thomas Bottegal's 
# 'Harmony' software, which is used for chordal analysis
# of sheet music

root_third_interval = 3 # Number of half steps
third_fifth_interval = 4 # Number of half steps
root_note = 'D#'
roman_numeral = 'iii' # Case doesn't matter here
key_signature = ['F#', 'C#'] # D major or B minor as example

def determine_chord_quality(root_third_interval, third_fifth_interval):
  chord_quality = None
  if root_third_interval == 3:
    if third_fifth_interval == 3:
      chord_quality = 'Diminished'
    else:
      chord_quality = 'Minor'
  elif root_third_interval == 4:
    if third_fifth_interval == 4:
      chord_quality = 'Augmented'
    else:
      chord_quality = 'Major'
  return chord_quality
      
def determine_roman_numeral_case(roman_numeral, chord_quality):
  if chord_quality == 'Diminished' or chord_quality == 'Minor':
    roman_numeral = roman_numeral.lower()
  else:
    roman_numeral = roman_numeral.upper()
  return roman_numeral
    
def determine_accidental(roman_numeral, root_note):
  if '#' in root_note and root_note not in key_signature:
    roman_numeral = '#' + roman_numeral
  # I don't know what symbol you're using to denote flats
  elif 'flat' in root_note and root_note not in key_signature:
    roman_numeral = 'flat' + roman_numeral
  # Same here, not sure what you're using to denote naturals
  elif 'natural' in root_note and root_note not in key_signature:
    roman_numeral = 'natural' + roman_numeral
  return roman_numeral
    
chord_quality = determine_chord_quality(root_third_interval, third_fifth_interval)
roman_numeral = determine_roman_numeral_case(roman_numeral, chord_quality)
roman_numeral = determine_accidental(roman_numeral, root_note)

print(chord_quality)
print(roman_numeral)

# Routines for finding the inversion of a chord

def get_root_bass_interval(chord_root, bass_note):
  note_seq = list("CDEFGABCDEFGA")
  range_start = note_seq.index(chord_root[0])
  for j in range(range_start, range_start+7):
    if bass_note[0] == note_seq[j]:
      break
  root_bass_interval = j-range_start+1
  return root_bass_interval

# chord_root and bass_note expected as a one or two character string
def get_chord_inversion(chord_root, bass_note, seventh_chord = False):
  root_bass_interval = get_root_bass_interval(chord_root, bass_note)
  chord_interval = None
  if root_bass_interval == 3:
    if seventh_chord == False:
      chord_interval = '6'
    else:
      chord_interval = '6/5'
  elif root_bass_interval == 5:
    if seventh_chord == False:
      chord_interval = '6/4'
    else:
      chord_interval = '4/3'
  # Non 7th chords can't have a third inversion
  elif root_bass_interval == 7:
    chord_interval = '4/2'
  return chord_interval
  
print(get_chord_inversion('A', 'C', True))
print(get_chord_inversion('A', 'C'))
print(get_chord_inversion('C#', 'G#'))
print(get_chord_inversion('C#', 'G#', True))
print(get_chord_inversion('G', 'F'))