/**
 * return: [smallEvents, largeEvents]
 */
function generateAuditionFields () {
  const sizes = ['small', 'large']
  const types = ['Scene', 'Orchestra', 'Dance']
  const perms = sizes.map(x => types.map(y => x + y))
  return perms
}

/**
 * returns: copy of `obj` with `fields` removed
 */
function stripObjectFields (obj, fields) {
  return Object.keys(obj)
    .filter(key => !fields.includes(key))
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, {})
}

function retrieveFields (form, fields) {
  return fields.map(field => (form[field] ? field : null)).filter(x => x !== null)
}

export const workAreas = {
  logistics: 'Logistics',
  administration: 'Administration',
  spex: 'Spex',
  cheer: 'Cheer',
  cookFood: 'Cook food',
  bar: 'Bar',
  lightsAndSound: 'Lights & Sound',
  editing: 'Editing - photos/movie/animation',
  programming: 'Programming & Networks',
  construction: 'Construction',
  design: 'Design',
  sew: 'Sew',
  economics: 'Economics',
  comms: 'Communication',
  service: 'Service',
  safety: 'Safety',
  allround: 'Allround',
}

/* personalInfoForm -> KarnevalInfoForm -> registrationForm */
// eslint-disable-next-line
export function createRegisterForm(pform, kform) {
  const workAreaFields = Object.keys(workAreas).map(x => workAreas[x])

  /* prepare skills array for DB */
  const workFields = ['skills', 'interest'].map(x => workAreaFields.map(y => x + y))
  const skillFields = workFields[0]
  const interestFields = workFields[1]

  kform.skills = retrieveFields(kform, skillFields).map(x => x.replace('skills', ''))
  kform.interest = retrieveFields(kform, interestFields).map(x => x.replace('interest', ''))

  kform.groupLeader = !!kform.interestleaderPosition

  /* clean-up kform object */
  kform = stripObjectFields(kform, [...skillFields, ...interestFields, 'careOf'])

  /* reformat audition for DB string format */
  if (kform.audition) {
    const events = generateAuditionFields()
    const smallEvents = events[0]
    const largeEvents = events[1]

    kform.smallPleasures = retrieveFields(kform, smallEvents).map(x => x.replace('small', ''))
    kform.bigPleasures = retrieveFields(kform, largeEvents).map(x => x.replace('large', ''))
  } else {
    kform.audition = ''
  }

  const rform = { ...kform, ...pform }

  return rform
}

export const unwrapStateToFieldProps = (user) => {
  if (user.interests) user.interests.map(x => (user[`interest${x}`] = true))

  if (user.skills) user.skills.map(x => (user[`skills${x}`] = true))

  if (user.bigPleasures) {
    user.audition = true
    user.bigPleasures.map(x => (user[`large${x}`] = true))
  }

  if (user.smallPleasures) {
    user.audition = true
    user.smallPleasures.map(x => (user[`small${x}`] = true))
  }

  if (user.groupLeader) {
    user.interestleaderPosition = true
  }

  return user
}
