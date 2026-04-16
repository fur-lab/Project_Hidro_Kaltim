const Greeting = () => {
    return (
        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-cyan-600 p-12 text-white shadow-xl">
            <h1 className="mb-4 text-5xl font-bold">Selamat Datang di Sistem Monitoring Curah Hujan</h1>
            <p className="mb-8 text-xl text-blue-100">
                Platform monitoring dan analisis data curah hujan, TMA, debit, iklim, dan kualitas air secara real-time
            </p>
            <div className="flex gap-4">
                <div
                    // href="/curah-hujan"
                    className="transform rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                    Lihat Data Curah Hujan
                </div>
                <div
                    // href="/tentang-kami"
                    className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-400"
                >
                    Tentang Kami
                </div>
            </div>
        </div>

    )
}

export default Greeting;