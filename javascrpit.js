// Data pegawai
const pegawai = {
    nama: "Ridwan",
    jabatan: "manajer",
    status: "menikah"
  };
  
  // Fungsi untuk menghitung gaji
  function hitungGaji(gapok, jabatan, status) {
    let gajiPokok;
    switch (jabatan) {
      case "manajer":
        gajiPokok = 15000000;
        break;
      case "asisten manajer":
        gajiPokok = 10000000;
        break;
      case "staf":
        gajiPokok = 5000000;
        break;
      default:
        gajiPokok = 0;
    }
    
    const tunjanganJabatan = 0.15 * gajiPokok;
    const bpjs = 0.1 * gajiPokok;
    const tunjanganKeluarga = status === "menikah" ? 0.2 * gajiPokok : 0;
    
    const totalGaji = gajiPokok + tunjanganJabatan + tunjanganKeluarga - bpjs;
    
    return totalGaji;
  }
  
  // Mencetak tabel
  function cetakTabel(pegawai) {
    const table = document.createElement('table');
    
    // Judul kolom
    const thead = table.createTHead();
    const row = thead.insertRow();
    const columns = ["Nama Pegawai", "Jabatan", "Status", "Gaji Pokok", "Tunjangan Jabatan", "BPJS", "Tunjangan Keluarga", "Total Gaji"];
    columns.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col;
      row.appendChild(th);
    });
    
    // Data pegawai
    const tbody = table.createTBody();
    const dataRow = tbody.insertRow();
    dataRow.insertCell().textContent = pegawai.nama;
    dataRow.insertCell().textContent = pegawai.jabatan;
    dataRow.insertCell().textContent = pegawai.status;
    
    const gajiPokok = hitungGaji(pegawai.gapok, pegawai.jabatan, pegawai.status);
    dataRow.insertCell().textContent = gajiPokok.toLocaleString('id-ID');
    dataRow.insertCell().textContent = (0.15 * gajiPokok).toLocaleString('id-ID');
    dataRow.insertCell().textContent = (0.1 * gajiPokok).toLocaleString('id-ID');
    dataRow.insertCell().textContent = ((pegawai.status === "menikah") ? (0.2 * gajiPokok).toLocaleString('id-ID') : "0");
    dataRow.insertCell().textContent = (gajiPokok).toLocaleString('id-ID');
    
    // Total gaji
    const tfoot = table.createTFoot();
    const totalRow = tfoot.insertRow();
    const totalCell = totalRow.insertCell();
    totalCell.textContent = "Total Gaji: " + gajiPokok.toLocaleString('id-ID');
    
    document.body.appendChild(table);
  }
  
  // Panggil fungsi cetakTabel dengan data pegawai
  cetakTabel(pegawai);
  