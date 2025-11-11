<script>
    let name = $state({
        firstName: '',
        lastName: ''
    })

    let name2 = $state.raw({
        firstName: '',
        lastName: ''
    })

    function sayHello() {
        name2 = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value
        }
    }
</script>

<main>
    <h2>
        Deep State
    </h2>
    <input onchange={(e) => name.firstName = e.target.value} placeholder="First Name" type="text"/>
    <input onchange={(e) => name.lastName = e.target.value} placeholder="Last Name" type="text"/>

    <h3>Hello {name.firstName} {name.lastName}</h3>

    <hr/>

    <h2>
        Raw Deep State
    </h2>
    <input id="firstName" name="firstName" placeholder="First Name" type="text"/>
    <input id="lastName" name="lastName" placeholder="Last Name" type="text"/>
    <button onclick={sayHello}>Say Hello</button>
    <h3>Hello {name2.firstName} {name2.lastName}</h3>
    
</main>