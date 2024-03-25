import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Data from '../../assets/biodata.json';

let data = JSON.stringify(Data["Mahasiswa"])
let ardata = JSON.parse(data)
let contoh

export function InAbout({ contoh }) {
    const datain = JSON.stringify(ardata.at(contoh))
    const ardatain = JSON.parse(datain)
    const kunci = Object.getOwnPropertyNames(ardatain)
    const nilai = Object.values(ardatain)

    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{nilai[0]}</h4>
                </div>
                <div className="card-body">
                    <img src={nilai[5]} className="img-fluid rounded" alt="profilepic"></img>
                    <ul className="list-unstyled mt-3 mb-4 text-start">
                        {kunci[1].toUpperCase().replace('_', ' ')}: {nilai[1]} <br />
                        {kunci[2].toUpperCase()}: {nilai[2]} <br />
                        {kunci[3].toUpperCase()}: {nilai[3]} <br />
                        {kunci[4].toUpperCase()}: {nilai[4]} <br />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function About({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tentang Kami</h2>}
        >
            <Head title="About" />

            <div className="container py-3">
                <header>
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal text-body-emphasis">Tentang Kami</h1>
                        <p className="fs-5 text-body-secondary text-start">Kami adalah tim yang akan mengembangkan sebuah sistem yaitu Monitoring water and light in plants, sebuah solusi inovatif untuk meningkatkan produktivitas tanaman secara keseluruhan. Kami percaya bahwa deteksi dini akan menjadi kunci untuk mencegah kerugian, Maka dari itu kami menciptakan teknologi yang dapat memberikan peringatan awal dengan cepat dan akurat.
                        </p>
                        <p className="fs-5 text-body-secondary text-start">
                            Tim kami beranggotakan 4 orang yakni : Rizky Nugroho Firdaus, Putra Alpa Omega Bangun, Gebby Halmita, dan Muhammad Husain Kaasyiful G. Bersama-sama kami membuat alat Monitoring Air dan Cahaya pada Tumbuhan.
                        </p>
                        <p className="fs-5 text-body-secondary text-start">
                            Terima kasih telah mengunjungi halaman "About Us". Kami berharap dapat berbagi lebih banyak tentang proyek dan inisiatif kami serta mengundang Anda untuk bergabung dalam perjalanan kami. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.</p>
                    </div>
                </header>

                <main>
                    <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
                        <InAbout contoh={0} />
                        <InAbout contoh={1} />
                        <InAbout contoh={2} />
                        <InAbout contoh={3} />
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
