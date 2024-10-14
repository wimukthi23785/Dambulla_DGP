ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5234").setExtent([182997.150731, 293956.818779, 190025.292497, 298419.861341]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Dambulla_zones_Reg_1 = new ol.format.GeoJSON();
var features_Dambulla_zones_Reg_1 = format_Dambulla_zones_Reg_1.readFeatures(json_Dambulla_zones_Reg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Dambulla_zones_Reg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dambulla_zones_Reg_1.addFeatures(features_Dambulla_zones_Reg_1);
var lyr_Dambulla_zones_Reg_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dambulla_zones_Reg_1, 
                style: style_Dambulla_zones_Reg_1,
                popuplayertitle: "Dambulla_zones_Reg",
                interactive: true,
                title: '<img src="styles/legend/Dambulla_zones_Reg_1.png" /> Dambulla_zones_Reg'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Dambulla_zones_Reg_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Dambulla_zones_Reg_1];
lyr_Dambulla_zones_Reg_1.set('fieldAliases', {'ZF': 'ZF', 'path': 'path', 'Zone_no': 'Zone_no', 'Zone': 'Zone', 'Zone_Facto': 'Zone_Facto', 'Permitted': 'Permitted', 'Not_Permit': 'Not_Permit', 'Permissibl': 'Permissibl', 'Height': 'Height', 'Special_Re': 'Special_Re', });
lyr_Dambulla_zones_Reg_1.set('fieldImages', {'ZF': '', 'path': '', 'Zone_no': '', 'Zone': '', 'Zone_Facto': '', 'Permitted': '', 'Not_Permit': '', 'Permissibl': '', 'Height': '', 'Special_Re': '', });
lyr_Dambulla_zones_Reg_1.set('fieldLabels', {'ZF': 'hidden field', 'path': 'hidden field', 'Zone_no': 'inline label - visible with data', 'Zone': 'hidden field', 'Zone_Facto': 'inline label - visible with data', 'Permitted': 'hidden field', 'Not_Permit': 'inline label - visible with data', 'Permissibl': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Special_Re': 'inline label - visible with data', });
lyr_Dambulla_zones_Reg_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});