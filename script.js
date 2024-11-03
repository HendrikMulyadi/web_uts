document.querySelector('#header').innerHTML = `
<header class="header p-3 bg-gradient-to-r from-lime-100 to-green-500">
<!-- bagian navbar -->
        <nav class="flex capitalize gap-4 justify-between items-center">
            <div class="flex items-center justify-between w-[35%]">
                <div class="logo p-4"></div>
                <ul class="gap-3 flex">
                    <li><a href="../index.html">home</a></li>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                profil
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="profil/organisasi.html">Organisasi</a></li>
                                <li><a class="dropdown-item" href="profil/akreditasi.html">Akreditasi</a></li>
                                <li><a class="dropdown-item" href="profil/status_sttc.html">Status STTC</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Fasilitas
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="fasilitas/mesjid.html">mesjid</a></li>
                                <li><a class="dropdown-item" href="fasilitas/aula.html">aula</a></li>
                                <li><a class="dropdown-item" href="fasilitas/lab.html">lab komputer</a></li>
                                <li><a class="dropdown-item" href="fasilitas/sarana.html">sarana olahraga</a></li>
                                <li><a class="dropdown-item" href="fasilitas/ruang_kelas.html">ruang kelas</a></li>
                                <li><a class="dropdown-item" href="fasilitas/kantin.html">kantin</a></li>
                                <li><a class="dropdown-item" href="fasilitas/perpus.html">perpustakaan</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                layanan
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="layanan/verifikasi.html">verifikasi ijazah</a></li>
                                <li><a class="dropdown-item" href="layanan/perpus_digital.html">perpustakaan digital</a></li>
                                <li><a class="dropdown-item" href="layanan/jurnal.html">jurnal</a></li>
                                <li><a class="dropdown-item" href="layanan/e_learning.html">e-learning</a></li>
                            </ul>
                        </div>
                        </li>
                        <li>
                        <div class="dropdown">
                            <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                tautan
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="tautan/lpm.html">LPPM</a></li>
                                <li><a class="dropdown-item" href="tautan/upm.html">UPM</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>


            
            
            <!-- bagian pencarian -->
            <div class="flex items-center gap-4">
                <div class="flex justify-between rounded-md overflow-hidden">
                <i class="bi p-1 bg-black cursor-pointer bi-search text-white"></i>
                    <input type="search" class="outline-none p-1" placeholder="cari">
                </div>
                <div>kontak</div>
                <div class="indo"></div>
                </div>
                </nav>
                </header>

`

document.querySelector('#footer').innerHTML = `
 <footer class="flex justify-center items-center p-10 bg-gray-700">
        <div class="flex justigy-between gap-5 text-white  capitalize">
            <div>
                <ul>
                    <li>tentang STTC</li>
                    <li>Sejarah</li>
                    <li>Visi dan Misi</li>
                    <li>Struktur Organisasi</li>
                    <li>Tugas dan fungsi</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>penerimaan</li>
                    <li>sarjana</li>
                    <li>pertukaran mahasiwa</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>pendidikan </li>
                    <li>program studi</li>
                    <li>beasiswa</li>
                    <li>staf</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>kampus</li>
                    <li>aktifitas mahasiswa</li>
                    <li>jelajah</li>
                </ul>
            </div>
        </div>
    </footer>`

    