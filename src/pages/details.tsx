import Data from '../assets/data_alat.json'

let data = JSON.stringify(Data["Perlatan"])
let ardata: Array<Object> = JSON.parse(data)
let contoh = 0

function Detail({contoh}) {
    let datain = JSON.stringify(ardata.at(contoh))
    let ardatain: Object = JSON.parse(datain)
    let coba: string[] = Object.getOwnPropertyNames(ardatain)
    let nama = JSON.stringify(ardatain.nama).slice(1, -1)
    let tipe = JSON.stringify(ardatain.tipe_alat)
    let cara = JSON.stringify(ardatain.cara_kerja)



    return (
        <>
            <div className="container my-5">
                <div className=" p-5 bg-body-tertiary rounded-3">
                    <div className="col">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{nama}</h5>
                                        <p className="card-text">
                                            {tipe} <br />
                                            
                                        </p>
                                        <p className="card-text"><small className="text-body-secondary">
                                            {cara}
                                        </small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default function Details() {
    return (
        <>
            <div className= "container">
                <header><div className="pricing-header p-3 pb-md-4 mx-auto text-center"><h1 className="display-4 fw-normal text-body-emphasis">Rincian Alat</h1><p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It?s built with default Bootstrap components and utilities with little customization.</p></div></header>

                <Detail contoh={0} />
                <Detail contoh={1} />
                <Detail contoh={2} />
                <Detail contoh={3} />
                <Detail contoh={4} />
           </div>
        </>
    )
}