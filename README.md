
# Sensor Space Coordinate Editor

A React-based UI for editing space coordinates on floor plan maps.
Built for the **UXP framework**, with configurable backend integration.

---

## 📦 Repository

[https://github.com/lucy-usecases/utility-uis](https://github.com/lucy-usecases/utility-uis)

---

## 🎯 Overview

This tool allows users to visually edit coordinates for **spaces** (sensors, rooms, equipment) on interactive floor plan maps.
It supports both **single-point markers** and **polygon regions**, with drag-and-drop editing for intuitive adjustments.

---

## ✨ Features

* Visual coordinate editing with drag & drop
* Search and filter spaces by name and type
* Support for markers (single point) and polygons (regions)
* Custom colors and icons for spaces
* Configurable backend integration
* Configuration stored persistently in backend

---

## ⚠️ Limitations

* Only one space can be edited at a time
* Works with one floor at a time
* Changes must be saved before switching spaces

---

## 🚀 Setup & Configuration

1. Clone the repository
2. Upload to your Lucy account
3. Import the model file **`SpaceCoordinateEditorConfigurationModel.Model.v2.json`**
4. Configure the screen from **UXP** app **screens** page
4. Access the app at:

   ```
   /Apps/UXP/screen/sensor-space-coordinate-editor(or your screen id)
   ```
5. Open the **settings icon** in the UI to configure backend endpoints

### Required Endpoints

* **Get Floors** → fetch available floors
* **Get Spaces** → fetch spaces for a floor (accepts `floorId`)
* **Set Coordinates** → update space coordinates

### Optional Endpoints

* **Get Types** → fetch space types for filtering

Configuration is stored and reused automatically.

---

## 🔌 Backend Integration

**Floors**

```json
{
  "floors": [
    {
      "id": "floor-1",
      "name": "Level 1",
      "layout": {
        "floorPlan": "/path/to/image.png",
        "width": 1200,
        "height": 800
      }
    }
  ]
}
```

**Spaces**

```json
{
  "spaces": [
    {
      "id": "space-1",
      "name": "Meeting Room",
      "coordinates": [{"x": 100, "y": 150}],
      "color": "#3C82F6",
      "icon": "/path/to/icon.png",
      "type": "room"
    }
  ]
}
```

**Types (optional)**

```json
{
  "types": [
    {"id": "room", "name": "Room"},
    {"id": "sensor", "name": "Sensor"}
  ]
}
```

**Update Payload**

```json
{
  "id": "space-1",
  "coordinates": "[{\"x\":100,\"y\":150}]",
  "floor": "floor-1"
}
```

---

## 📐 Coordinate System

* Coordinates are image-based (0,0 = top-left)
* Y-axis is flipped for map rendering
* Decimal precision supported

---

## 🤝 Contributing

We welcome contributions!
Follow these common practices:

* Fork the repo and create feature branches (`feature/my-enhancement`)
* Use **clear commit messages** (Conventional Commits preferred)
* Write or update documentation when adding features
* Open a Pull Request with a clear description of the change
* Ensure code follows existing linting/formatting rules