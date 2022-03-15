const angka: number = 1
const kata: string = "Tes"
const isJomblo: boolean = true
const hobbies: string[] = ["Rebahan", "Ngopi"]
const oddNumbers: Array<number> = [1, 3, 5, 7, 9]

const Profile1: { name: string, age: number, job?: string } = {
	name : "Sakti Pujo Edi",
	age : 21
}

interface Profile2 {
	name: string,
	age: number,
	job?: string
}

const profile2: Profile2 = {
	name: "Sakti Pujo Edi",
	age: 21
}

type Profile3 = {
	name: string,
	age: number,
	job?: string
}

const profile3: Profile3 = {
	name: "Sakti Pujo Edi",
	age: 21
}

// Bagaimana jika type kembalian dari fungsi tambah adalah string tetapi penjumlahan angka1 dan angka2 tetap benar
const add = (angka1: number, angka2: number): string => {
	return `${angka1 + angka2}`
}
const sembarang: any = [{},true,1,"satu"]

// Bagaimana penulisan type untuk array of object, gunakan type profile 1,2,3
const Profiles1Cara1: Array<{name: string, age: number}> = [
    {
        name: "Sakti Pujo Edi",
	    age: 21
    }
]

const Profiles1: Array<typeof Profile1> = [
    {
        name: "Sakti Pujo Edi",
	    age: 21
    }
]

const Profiles2: Array<Profile2> = [
    {
        name: "Sakti Pujo Edi",
	    age: 21
    }
]

const Profiles3: Profile3[] = [
    {
        name: "Sakti Pujo Edi",
	    age: 21
    }
]

// Bagaimana penulisan type untuk object yang berisi fungsi
const objectBerisiFungsi: {fungsi: Function} = {
    fungsi: function name(name:string) {
        return name
    }
}
// Bagaimana penulisan type untuk fungsi yang kembaliannya itu promise atau void
const voidFunction = (): void => { return console.log()}
async function promiseFunction(): Promise<void> {}

export default sembarang