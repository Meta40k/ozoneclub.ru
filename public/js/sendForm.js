function sendMail() {

    let data = {}

    data.type = document.getElementById('inputGroupSelect01').value
    data.name = document.getElementById('userName').value
    data.email = document.getElementById('userEmail').value
    data.tel = document.getElementById('userTel').value
    data.comment = document.getElementById('userComment').value
    if (data.name.length < 3 || data.name.email < 5 || data.tel.length != 18) {
        document.getElementById('alert').hidden = false
        setTimeout(() => { document.getElementById('alert').hidden = true }, 3000)
    } else {
        console.log(data)
        $.post('/sendMail', data).then((res) => {
            if (res.done) {
                document.getElementById('alertS').hidden = false
                    // setTimeout(() => { document.getElementById('alertS').hidden = true }, 3000)
                document.getElementById('inputGroupSelect01').disabled = true
                document.getElementById('userName').disabled = true
                document.getElementById('userEmail').disabled = true
                document.getElementById('userTel').disabled = true
                document.getElementById('userComment').disabled = true
                document.getElementById('btnS').disabled = true

                $('#btclose').click()
            }
        })
    }

}