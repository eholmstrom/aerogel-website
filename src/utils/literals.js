export const unions = [
  'None',
  'Blekingska Nation',
  'Göteborgs Nation',
  'Hallands Nation',
  'Helsingkrona Nation',
  'Kalmar Nation',
  'Kristianstads Nation',
  'Lunds Nation',
  'Malmö Nation',
  'Sydskånska Nation',
  'Västgöta Nation',
  'Wermlands Nation',
  'Östgöta Nation',
]

export const corpsList = [
  'None',
  'Corpus Medicum',
  'Humanistiska och teologiska studentkåren',
  'Juridiska Föreningen',
  'LundaEkonomerna',
  'Lunds Naturvetarkår',
  'Samhällsvetarkåren',
  'Studentkåren vid Konstnärliga fakulteten i Malmö',
  'TLTH',
  'Lunds Doktorandkår',
]

export const tshirtSizes = ['S', 'M', 'L', 'XL']

export const driversLicenseTypes = ['None', 'B', 'C', 'D', 'BE', 'CE', 'DE']

export const studyStartYears = () => {
  const is = []
  for (let i = 2005; i <= 2018; i++) {
    is.push(i.toString())
  }
  return is
}

export const gdpr1 =
  'I am aware of and allow the use of my personal information by Lundakarnevalen to: Control my membership in Studentlund, ' +
  'register me for study circles at Folkuniversitetet (to be able to get benefits for the activities organized by Lundakarnevalen study circles might occur, the section will provide information about this)' +
  ' and to be used together with ung media, a cooperation organization of Lundakarnevalen.'

export const gdpr2 =
  'I am aware that Lundakarnevalen will take pictures/movies and that I can appear in these. I allow Lundakarnevalen to' +
  ' use these pictures and movies on Facebook, Instagram, Youtube and in karnevalsboxen.'

export const gdpr3 =
  'I am aware of and allow the use of my contact information during the whole year of 2018.'

export const gdpr4 =
  'If I accept a post with more responsibility I allow my contact information to be saved until the next Lundakarneval,' +
  ' to make a handover to a successor.'
