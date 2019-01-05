window.x = async () => {
  try {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ phone: '18603719093' })
    }
    const res = await (await fetch('https://us-central1-one-time-pw-f02ca.cloudfunctions.net/createUser', opts)).json()
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}