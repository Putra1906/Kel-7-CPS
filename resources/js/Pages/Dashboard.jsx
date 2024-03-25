import { onValue, getDatabase, ref } from "firebase/database"
import FirebaseApp from "../firebase/firebase"
import { useEffect, useState } from "react"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const database = ref(getDatabase(FirebaseApp))

export default function Dashboard({ auth, data }) {
    const [datain, setData] = useState("{}")
    const [larik, setLarik] = useState([])

    useEffect(() => {
        return onValue(database, (snapshot) => {
            const data0 = JSON.stringify(snapshot.val())

            if (snapshot.exists()) {
                setData(data0)
                const ardatain = JSON.parse(datain)
                const kunci = Object.getOwnPropertyNames(ardatain)
                const keadaan = Object.values(ardatain)
                let gabungan = []

                for (let i = 0; i < kunci.length; i++) {
                    gabungan[i] = keadaan[i]
                    gabungan[i].waktu = kunci[i].slice(2)
                }
                setLarik(gabungan)
            }
        })
    })

    const daftar = larik.map(nilai =>
        <tbody key={nilai.waktu}>
            <tr>
                <th scope="row">{nilai.waktu}</th>
                <td>{nilai.cahaya}</td>
                <td>{nilai.hujan}</td>
            </tr>
        </tbody>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Beranda</h2>}
        >
            <Head title="Dashboard" />

            <header><div className="pricing-header p-3 pb-md-4 mx-auto text-center"><h1 className="display-4 fw-normal text-body-emphasis">Plant Monitor</h1><p className="fs-5 text-body-secondary">Perangkat IoT ini memonitor cahaya dan tingkat hujan (data mentah dari RainDrop Sensor) yang berguna untuk memelihara tanaman.</p></div></header>

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
                        {daftar}
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
