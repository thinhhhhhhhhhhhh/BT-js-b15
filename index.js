document.getElementById('tuyenSinForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ các trường nhập liệu
    var diemChuan = parseFloat(document.getElementById('diemChuan').value);
    var diemMon1 = parseFloat(document.getElementById('diemMon1').value);
    var diemMon2 = parseFloat(document.getElementById('diemMon2').value);
    var diemMon3 = parseFloat(document.getElementById('diemMon3').value);
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = parseInt(document.getElementById('doiTuong').value);

    // Tính tổng điểm và điểm ưu tiên
    var diemUuTien = 0;
    if (khuVuc === 'X'){
        diemUuTien += 0;
        } else if (khuVuc === 'A') {
    diemUuTien += 2;
        } else if (khuVuc === 'B') {
    diemUuTien += 1;
        } else if (khuVuc === 'C') {
    diemUuTien += 0.5;
    }
    if (doiTuong === 1) {
        diemUuTien += 2.5;
      } else if (doiTuong === 2) {
        diemUuTien += 1.5;
      } else if (doiTuong === 3) {
        diemUuTien += 1;
      }
    
      var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
    
      // Kiểm tra kết quả đậu/rớt
      var result = '';
      if (tongDiem >= diemChuan && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0) {
        result = 'Đậu';
      } else {
        result = 'Rớt';
      }
    
      // Hiển thị kết quả
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = '';
      var table = document.createElement('table');
      var tbody = document.createElement('tbody');
    
      var row1 = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      th1.innerHTML = 'Kết quả';
      th2.innerHTML = 'Tổng điểm';
      row1.appendChild(th1);
      row1.appendChild(th2);
      tbody.appendChild(row1);
    
      var row2 = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      td1.innerHTML = result;
      td2.innerHTML = tongDiem;
      row2.appendChild(td1);
      row2.appendChild(td2);
      tbody.appendChild(row2);
    
      table.appendChild(tbody);
      resultElement.appendChild(table);
    });
    
        document.getElementById('tienDienForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Ngăn form submit lại

      // Lấy giá trị từ các trường nhập liệu
      var ten = document.getElementById('ten').value;
      var soKW = parseInt(document.getElementById('soKW').value);

      // Tính tiền trả theo quy tắc
      var tienTra = 0;
      if (soKW <= 50) {
        tienTra = soKW * 500;
      } else if (soKW <= 100) {
        tienTra = 50 * 500 + (soKW - 50) * 650;
      } else if (soKW <= 150) {
        tienTra = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
      } else {
        tienTra = 50 * 500 + 50 * 650 + 50 * 850 + (soKW - 150) * 1100;
      }

      // Hiển thị kết quả
      var resultElement = document.getElementById('Tinhtien');
      resultElement.innerHTML = '';
      var table = document.createElement('table');
      var tbody = document.createElement('tbody');

      var row1 = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      th1.innerHTML = 'Tên';
      th2.innerHTML = 'Tiền trả';
      row1.appendChild(th1);
      row1.appendChild(th2);
      tbody.appendChild(row1);

      var row2 = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      td1.innerHTML = ten;
      td2.innerHTML = tienTra + 'đ';
      row2.appendChild(td1);
      row2.appendChild(td2);
      tbody.appendChild(row2);

      table.appendChild(tbody);
      resultElement.appendChild(table);
    });


        document.getElementById('thueTNCNForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn form submit lại
  
        // Lấy giá trị từ các trường nhập liệu
        var hoTen = document.getElementById('hoTen').value;
        var tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
        var soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);
  
        // Tính thuế thu nhập cá nhân
        var thuNhapChiuThue = tongThuNhap - 4000 - soNguoiPhuThuoc * 1600;
        var thueSuat = 0;
        if (thuNhapChiuThue <= 60) {
          thueSuat = 5;
        } else if (thuNhapChiuThue <= 120) {
          thueSuat = 10;
        } else if (thuNhapChiuThue <= 210) {
          thueSuat = 15;
        } else if (thuNhapChiuThue <= 384) {
          thueSuat = 20;
        } else if (thuNhapChiuThue <= 624) {
          thueSuat = 25;
        } else if (thuNhapChiuThue <= 960) {
          thueSuat = 30;
        } else {
          thueSuat = 35;
        }
        var tienThue = (thuNhapChiuThue * thueSuat) / 100;
  
        // Hiển thị kết quả
        var resultElement = document.getElementById('Tinhthue');
        resultElement.innerHTML = '';
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
  
        var row1 = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        th1.innerHTML = 'Họ và tên';
        th2.innerHTML = 'Thuế thu nhập cá nhân (triệu VND)';
        row1.appendChild(th1);
        row1.appendChild(th2);
        tbody.appendChild(row1);
        var row2 = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.innerHTML = hoTen;
        td2.innerHTML = tienThue.toFixed(2);
        row2.appendChild(td1);
        row2.appendChild(td2);
        tbody.appendChild(row2);
      table.appendChild(tbody);
      resultElement.appendChild(table);
    });
  

    function toggleConnectionField() {
        const customerType = document.getElementById("customerType").value;
        const connectionField = document.getElementById("connections");
        connectionField.disabled = (customerType === "home");
      }
      
      function calculateBill() {
        const customerType = document.getElementById("customerType").value;
        const connections = parseInt(document.getElementById("connections").value);
        const premiumChannels = parseInt(document.getElementById("premiumChannels").value);
        let billAmount = 0;
      
        if (customerType === "home") {
          const processingFee = 4.5;
          const basicServiceFee = 20.5;
          const premiumChannelFee = 7.5;
          billAmount = processingFee + basicServiceFee + (premiumChannelFee * premiumChannels);
        } else if (customerType === "business") {
          const processingFee = 15;
          const basicServiceFee = 75;
          const additionalConnectionFee = 5;
          const premiumChannelFee = 50;
          const baseConnections = 10;
          const additionalConnections = Math.max(0, connections - baseConnections);
          billAmount = processingFee + basicServiceFee + (additionalConnectionFee * additionalConnections) + (premiumChannelFee * premiumChannels);
        }
      
        document.getElementById("billAmount").innerHTML = "Hóa đơn của bạn là: $" + billAmount.toFixed(2);
      }
      