class WaterwayMap {
    constructor(config) {
        this.mapElementId = config.mapId;
        this.coordElement = document.getElementById(config.coordId);
        this.isReadOnly = config.isReadOnly || false; 
        
        // Tọa độ mặc định (Hà Nội)
        this.defaultLocation = config.defaultLocation || { lat: 21.0285, lng: 105.8542 };
        
        this.map = null;
        this.marker = null; 
    }

    init() {
        if (!document.getElementById(this.mapElementId)) return;

        // 1. Khởi tạo bản đồ Leaflet
        this.map = L.map(this.mapElementId).setView([this.defaultLocation.lat, this.defaultLocation.lng], 14);

        // 2. Kéo dữ liệu bản đồ từ OpenStreetMap (Miễn phí 100%)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // 3. Phân luồng quyền hạn
        if (!this.isReadOnly) {
            this.setupSearchBox();
            this.setupMapClick();
        } else {
            // Chế độ Take Mission: Chỉ hiện marker mặc định
            this.placeMarker(this.defaultLocation.lat, this.defaultLocation.lng);
        }
    }

    // Thiết lập thanh tìm kiếm (Sử dụng plugin Geocoder)
    setupSearchBox() {
        const geocoder = L.Control.geocoder({
            defaultMarkGeocode: false, // Tắt tính năng tự đánh dấu mặc định để mình tự custom
            placeholder: "Tìm kiếm địa điểm..."
        })
        .on('markgeocode', (e) => {
            // Khi người dùng chọn 1 kết quả tìm kiếm
            const latlng = e.geocode.center;
            this.map.fitBounds(e.geocode.bbox); // Phóng to đến khu vực đó
            this.placeMarker(latlng.lat, latlng.lng); // Đặt marker
        })
        .addTo(this.map);
    }

    // Sự kiện click chuột vào bản đồ
    setupMapClick() {
        this.map.on('click', (e) => {
            this.placeMarker(e.latlng.lat, e.latlng.lng);
        });
    }

    // Đặt marker và in tọa độ ra màn hình
    placeMarker(lat, lng) {
        // Xóa marker cũ nếu đã có
        if (this.marker) {
            this.map.removeLayer(this.marker);
        }

        // Tạo marker mới
        this.marker = L.marker([lat, lng]).addTo(this.map);

        // Cập nhật text UI
        if (this.coordElement) {
            this.coordElement.innerText = `${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`;
            console.log("Tọa độ đã chọn:", { lat, lng });
        }
    }
}