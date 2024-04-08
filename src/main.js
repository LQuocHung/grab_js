function getEle(id) {
  return document.getElementById(id);
}

function chonLoaiXe() {
  const grabX = getEle("grabX");
  const grabSUV = getEle("grabSUV");
  const grabBlack = getEle("grabBlack");

  let loaiXe;

  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSUV.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }

  return loaiXe;
}

function soKm_1(soKm, giaTien) {
  const tongTienDau = soKm * giaTien;

  return tongTienDau;
}

function soKm_2(soKm, giaTien) {
  const tongTienSau = (soKm - 1) * giaTien;

  return tongTienSau;
}

function soKm_3(soKm, giaTien) {
  const tongTienCuoi = (soKm - 19) * giaTien;

  return tongTienCuoi;
}

function tinhTienCho(timeCho, giaTienCho) {
  let tienCho = 0;

  if (timeCho >= 3) {
    tienCho = Math.floor(timeCho / 3) * giaTienCho;
  }

  return tienCho;
}

const tinhTien = getEle("tinhTien");
tinhTien.onclick = function () {
  const soKm = getEle("soKm").value * 1;
  console.log(soKm);
  const thoiGian = getEle("thoiGian").value * 1;
  console.log(thoiGian);
  let tongTienXe = 0;
  const loaiXe = chonLoaiXe();

  switch (loaiXe) {
    case "grabX":
      if (0 <= soKm && soKm <= 1) {
        const tongTienDau = soKm_1(soKm, 8000);
        const tienCho = tinhTienCho(thoiGian, 2000);
        tongTienXe = tongTienDau + tienCho;
      } else if (1 < soKm <= 19) {
        const tongTienDau = soKm_1(1, 8000);
        const tongTienSau = soKm_2(soKm, 7500);
        const tienCho = tinhTienCho(thoiGian, 2000);

        tongTienXe = tongTienDau + tongTienSau + tienCho;
      } else if (soKm > 19) {
        const tongTienDau = soKm_1(soKm, 8000);
        const tongTienSau = soKm_2(soKm, 7500);
        const tongTienCuoi = soKm_3(soKm, 7000);
        const tienCho = tinhTienCho(thoiGian, 2000);

        tongTienXe = tongTienDau + tongTienSau + tongTienCuoi + tienCho;
      }
      break;

    case "grabSUV":
      if (0 <= soKm && soKm <= 1) {
        const tongTienDau = soKm_1(soKm, 9000);
        const tienCho = tinhTienCho(thoiGian, 3000);
        tongTienXe = tongTienDau + tienCho;
      } else if (1 < soKm <= 19) {
        const tongTienDau = soKm_2(1, 9000);
        const tongTienSau = soKm_2(soKm, 8500);
        const tienCho = tinhTienCho(thoiGian, 3000);

        tongTienXe = tongTienDau + tongTienSau + tienCho;
      } else if (soKm > 19) {
        const tongTienDau = soKm_1(soKm, 9000);
        const tongTienSau = soKm_2(soKm, 8500);
        const tongTienCuoi = soKm_3(soKm, 8000);
        const tienCho = tinhTienCho(thoiGian, 3000);

        tongTienXe = tongTienDau + tongTienSau + tongTienCuoi + tienCho;
      }
      break;
    case "grabBlack":
      if (0 <= soKm && soKm <= 1) {
        const tongTienDau = soKm_1(soKm, 10000);
        const tienCho = tinhTienCho(thoiGian, 3500);
        tongTienXe = tongTienDau + tienCho;
      } else if (1 < soKm <= 19) {
        const tongTienDau = soKm_1(soKm, 10000);
        const tongTienSau = soKm_2(soKm, 9500);
        const tienCho = tinhTienCho(thoiGian, 3500);

        tongTienXe = tongTienDau + tongTienSau + tienCho;
      } else if (soKm > 19) {
        const tongTienDau = soKm_1(soKm, 10000);
        const tongTienSau = soKm_2(soKm, 9500);
        const tongTienCuoi = soKm_3(soKm, 9000);
        const tienCho = tinhTienCho(thoiGian, 3500);

        tongTienXe = tongTienDau + tongTienSau + tongTienCuoi + tienCho;
      }
      break;

    default:
      break;
  }

  getEle("divThanhTien").style.display = "block";
  getEle("xuatTien").innerHTML = tongTienXe;
};
