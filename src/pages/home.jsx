import { child, get, getDatabase, onValue, ref } from "firebase/database"
import FirebaseApp from "../firebase/firebase"

const database = ref(getDatabase(FirebaseApp))

let data= ""
await get(child(database,"/")).then((snapshot) => {
    if (snapshot.exists()) {
        data = JSON.stringify(snapshot.val())
    }
})

const ardatain = JSON.parse(data)
const waktu = Object.keys(ardatain)

function Table() {
    const kunci = Object.getOwnPropertyNames(ardatain)
    const keadaan = Object.values(ardatain)
    let larik = []
    for (let i = 0; i < kunci.length; i++) {
        larik[i] = keadaan[i]
        larik[i].waktu = kunci[i].slice(2)
    }

    const daftar = larik.map(nilai =>
        <tbody key={nilai["waktu"]}>
            <tr>
                <th scope="row">{nilai["waktu"]}</th>
                <td>{nilai["cahaya"]}</td>
                <td>{nilai["hujan"]}</td>
            </tr>
        </tbody>
    );

    return (
        <>
            {daftar}
        </>
    )
}

export default function Home() {
    let databaru = ""

    onValue(database, (snapshot) => {
        if (snapshot.exists()) {
            databaru = JSON.stringify(snapshot.val())
        }
    })


    return (
        <>
            <header><div className="pricing-header p-3 pb-md-4 mx-auto text-center"><h1 className="display-4 fw-normal text-body-emphasis">Monitor Output Perangkat</h1><p className="fs-5 text-body-secondary">Perangkat IoT ini memonitor cahaya dan tingkat hujan (data mentah dari RainDrop Sensor) yang berguna untuk memelihara tanaman.</p></div></header>

            <div className="container my-5">
                <div className=" p-5 text-center bg-body-tertiary rounded-3">
                    <h1 className="text-body-emphasis">Tabel Monitoring</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">T+</th>
                                <th scope="col">Cahaya</th>
                                <th scope="col">Tingkat Hujan</th>
                            </tr>
                        </thead>
                        <Table />
                    </table>
                </div>
            </div>
        </>
    )
}