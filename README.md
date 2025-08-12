
# Sensor Space Coordinate Editor UI

A UI to visually configure and update space/sensor coordinates on a floor layout.
## 📁 Repository

[https://github.com/lucy-usecases/utility-uis](https://github.com/lucy-usecases/utility-uis)

---

## 🚫 Limitations

- Tool is designed to work with **only one floor at a time**
- Tool is also designed to edit **only one space at a time**
- Users must **save changes before editing another space**, or changes may be lost or cause errors

---

## ⚙️ Setup Instructions

1. Clone or download the UI from the repository
2. Upload it to any Lucy account
3. Access it via:  
   `/Apps/UXP/ui/sensor-space-coordinate-editor`
4. Use the following query parameters for configuration:  
   ```
   /Apps/UXP/ui/sensor-space-coordinate-editor
   ?flm=<model to get floors>
   &fla=<action to get floors>
   &asm=<model to get spaces>
   &asa=<action to get spaces>
   &ucm=<model to update coordinates>
   &uca=<action to update coordinates>
   &ssm=<model to add space>
   &ssa=<action to add space>
   ```
---

## 🧠 How It Works

1. **Load Floors**  
   - The tool fetches a list of available floors using your configured model and action.
   - Sample structure:
   ```json
   {
     "floors": [
       {
         "id": "floor-1",
         "name": "Level 1",
         "layout": {
           "floorPlan": "https://example.com/floor1.png",
           "width": 1200,
           "height": 800
         }
       }
     ]
   }
   ```

2. **Select a Floor**  
   - After loading floors, the user selects one floor to work with.

3. **Load Spaces**  
   - The tool fetches spaces (sensors, rooms, equipment, etc.) for the selected floor.
   - The action must **accept `floorId` as a parameter**.
   - Sample structure:
   ```json
   {
     "spaces": [
       {
         "id": "space-1",
         "name": "Meeting Room",
         "coordinates": [
           { "x": 100, "y": 150 }
         ],
         "color":"green",
         "icon": ""
       }
     ]
   }
   ```

4. **Edit Coordinates**  
   - The user selects a space and updates its coordinates on the floor plan.
   - ⚠️ The tool supports editing **one space at a time**.
   - You must **save changes before selecting another space**.

5. **Save Changes**  
   - Coordinates are updated using your configured model and action:
     ```json
     {
       "id": "space-1",
       "coordinates": [{ "x": 100, "y": 150 }]
     }
     ```

6. **Add New Spaces**  
   - Users can add new spaces for the selected floor. Acion will receive this payload:
     ```json
     {
       "floorId": "space-1",
       "space": {
        "id": "id",
        "name":"",
        "color":"",
        "icon":""
       }
     }
     ```

---
