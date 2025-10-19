export type Player = {
    id?: string,
    userName: string,
    password: string,
    email: string
    createdAt: Date,
    bestTime: string
}

export type PlayerLogin = {
    usernameemail: string,
    password: string
}
