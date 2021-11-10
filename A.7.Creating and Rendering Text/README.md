# Creating and Rendering Text

## Rendering Text

Rendering text in Three.js is very easy. All you have to do is define the font you want to use and use the same extrude properties we saw when we discussed `THREE.ExtrudeGeometry`.

The code required to create this 3D text is as follows:

```js
var loadedFont;
var fontload = new THREE.FontLoader();
fontload.load(
  "../../assets/fonts/bitstream_vera_sans_mono_roman.typeface.json",
  function (response) {
    loadedFont = response;
    render();
  }
);

var options = {
  size: 90,
  height: 90,
  font: loadedFont,
  bevelThickness: 2,
  bevelSize: 4,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1,
};

text = createMesh(new THREE.TextGeometry("Learning Three.js", options));
scene.add(text);
```

In this code fragment, you can see that we first have to load the font. For this, Three.js provides `THREE.FontLoader()`, where we provide the name of the font to load, and once loaded, Three.js will use the callback with the loaded font (response). In this example, we just assign it to a variable, and call the render function. The font that we loaded is also assigned to the options object we use in the constructor of the `THREE.TextGeometry`. The options we can pass into `THREE.TextGeometry` match those that we can pass in THREE.ExtrudeGeometry, plus a couple of ones specifically for `THREE.TextGeometry`.

Let's look at all the options we can specify for `THREE.TextGeometry`:

<table>
    <thead>
        <tr>
            <th  style="text-align: center;">Property</th>
            <th  style="text-align: center;">Mandatory</th>
            <th  style="text-align: center;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  style="text-align: center;">
                size
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This is the size of the text. The default value is 100.
            </td>
        </tr>
        <tr>
            <td  style="text-align: center;">
                height
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This is the length (depth) of the extrusion. The default value is 50.
            </td>
        </tr>
                <tr>
            <td  style="text-align: center;">
                font
            </td>
            <td  style="text-align: center;">
                Yes
            </td>
            <td>
                The loaded font to use for the text.
            </td>
        </tr>
        </tr>
        <tr>
            <td  style="text-align: center;">
                bevelThickness
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This is the depth of the bevel. The bevel is the rounded corner between the front and back faces and the extrusion. The default value is 10.
            </td>
        </tr>
        <tr>
            <td  style="text-align: center;">
                bevelSize
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This is the height of the bevel. The default value is 8.
            </td>
        </tr>
        <tr>
            <td  style="text-align: center;">
                bevelSegments
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This defines the number of segments that will be used by the bevel. The more segments there are, the smoother the bevel will look. The default value is 3.
            </td>
        </tr>
        <tr>
            <td  style="text-align: center;">
                bevelEnabled
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                If this is set to true, a bevel is added. The default value is false.
            </td>
        </tr>
        <tr>
            <td  style="text-align: center;">
                curveSegments
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This defines the number of segments used when extruding the curves of shapes. The more segments there are, the smoother the curves will look. The default value is 4.
            </td>
        </tr>
        <tr>
            <td  style="text-align: center;">
                steps
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This defines the number of segments the extrusion will be divided into. The default value is 1.
            </td>
        </tr>
                <tr>
            <td  style="text-align: center;">
                extrudePath
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                This is the path along which the shape should be extruded. If this isn't specified, the shape is extruded along the z axis.
            </td>
        </tr>
                </tr>
                <tr>
            <td  style="text-align: center;">
                uvGenerator
            </td>
            <td  style="text-align: center;">
                No
            </td>
            <td>
                When you use a texture with your material, the UV mapping determines what part of a texture is used for a specific face. With the UVGenerator property, you can pass in your own object that will create the UV settings for the faces that are created for the passed-in shapes.
            </td>
        </tr>
    </tbody>
</table>
