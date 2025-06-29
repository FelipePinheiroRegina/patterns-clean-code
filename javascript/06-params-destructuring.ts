// use named parameters
class User {
    private name: string
    private email: string
    private password: string

    constructor({name, email, password}) {
        this.name = name
        this.email = email
        this.password = password
    }

    static createUser({ name, email, password }: { name: string, email: string, password: string }) {
        return new User({ name, email, password })
    }

    get getName() {
        return this.name
    }
}


function createRouterController(body) {
    const { name, email, password } = body
    const user = User.createUser({ name, email, password})

    console.log(user.getName)
}

export const user = {
    name: 'Felipe Pinheiro',
    email: 'felipe@email.com',
    password: '123456',
}

createRouterController(user)