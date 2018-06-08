# Thematic map
Development of a thematic map using ArcGIS for Desktop about the variation of the global literacy rate.

## Introduction
The purpose of this thematic map is basically to print it on a t-shirt and on the other hand, representing our team in the [Call Of Data](http://callofdata.info/). An event, which has relation with the Data Science.

Required features of the map:

- Simple representation: Given such a printing technologies, a map with to many elements could be disadvantageous.
- Social and cultural Issues: the name of our team is on honor of [Agnes Sinclair Holbrook](https://hullhouse.uic.edu/hull/urbanexp/main.cgi?file=new/show_doc.ptt&doc=280&chap=39), who committed her  entire life to address the needs of European immigrants and poor people in Chicago in the [Hull House](https://es.wikipedia.org/wiki/Hull_House), at the end of the 19th century.
- Map projection conserving the area,  suitable for our kind  of map.

## Reasons

A name of a remarkable woman must been chosen doubtless for this event. The reason for *Agnes Sinclair Holbrook* was,  due to the fact that she can be considered as a pioneer in the spatial analysis. Field  that is closely related with our profession and training.

She designed a map, illustrating nationalities and social dimensions of the neighborhood located in east of *Hull House* that maps of that time didn't show.

> *To put into graphic form a few facts concerning the section of Chicago immediately east of the House*

We decided to perform a map, which involved social and cultural issues apart from a positive component  in her honor.

After considering several aspects we decided on representing the changes of the global literacy rate, since in the last few decades  it has increased significantly in areas where the literacy was very low.

## Development

1. Locate the source of data and download the same:
 * [Literacy](https://www.datosmacro.com/demografia/tasa-alfabetizacion): alphanumeric data on the global literacy rate

 * [Countries of the world ](https://t]apiquen-sig.jimdo.com/descargas-gratuitas/mundo/): geographical representation of global administrative boundaries.

1. In Arcmap a [File Geodatabase](http://desktop.arcgis.com/es/arcmap/10.3/manage-data/geodatabases/create-file-geodatabase.htm) was created to include our data. After this step, we created a [Dataset Feature](http://desktop.arcgis.com/es/arcmap/10.3/manage-data/feature-datasets/creating-mole-data-in-arccatalog-creating-a-featur.htm), specifying as a coordinate system, [Mollweide (world)](https://es.wikipedia.org/wiki/Proyecci%C3%B3n_de_Mollweide)  projection.
1. Validation and data integrity: data consistency was ensured.
 *  Regarded Spatial Data:
 The *shapefile* was imported to our *Feature dataset* checking  if  the display was correct. As a next step, using the conversion tool of ArcToolbox [Table to Excel](http://desktop.arcgis.com/es/arcmap/10.3/tools/conversion-toolbox/table-to-excel.htm), a [.xls](https://es.wikipedia.org/wiki/Microsoft_Excel) file was obtained with alphanumeric data corresponding to the ID and country fields. Using Microsoft Excel tool [Sort and Filter](https://support.office.com/es-es/article/inicio-r%C3%A1pido-ordenar-datos-en-una-hoja-de-c%C3%A1lculo-60153f94-d782-47e2-96a8-15cbb7712539), data was reorganized in alphabetical order according to the country.

 *  Variation literacy rate Data:
  From our data source was obtained the specific information such as the name of country and variation in the rate of literacy shown in other columns of the *.xls file* with transformed values of our *shapefile* being also organized according to the country name in alphabetical order.

1. In our excel file there are four columns.

 * ID of the country - origin shapefile of countries of the world
 * Name of the country - origin shapefile of countries of the world
 * Name of the country - origin alphanumeric data of literacy rate
 * Literacy Rate - origin alphanumeric data of literacy rate

It is verified that both data sources are linked  and one of the field is removed (country field).

5. In Arcmap [add this file *.xls*](http://desktop.arcgis.com/es/arcmap/10.3/manage-data/tables/adding-a-microsoft-excel-table-to-arcmap.htm) our dataframe.

1.  Two files, the file of alphanumeric data *.xls* and *feature dataset* with geographic data of the countries, was merged using Arcmap tool  [Union](http://desktop.arcgis.com/es/arcmap/10.3/manage-data/tables/about-joining-and-relating-tables.htm). This connection allows us to merge two tables by a common identifier (ID), giving the possibility to represent external spatial data.

1. Is convenient to export this link in a new *feature class*.

1.  **Symbology**: As we going to design a map with quantitative information of polygonal features, we considered the use by [graduates colors](http://desktop.arcgis.com/es/arcmap/10.3/map/working-with-layers/using-graduated-colors.htm)  in the desing. The field to be designed  is *the variation of the literacy rate*, the color ramp is *"Red to Green"* and the number of classes is *5*. We choosed manual classification method and the following ranges was our choice: more than <20%, 20% to 1.5%, from 1.5 to -1.5%, from -1.5% to -20%, more than 20%.

1. In order to improve the representation and to have a better mapping , we place on the map [Grids and Grid](http://desktop.arcgis.com/es/arcmap/10.3/map/page-layouts/adding-a-graticule.htm), and in that way meridians parallels are represented.


## Conclusion
The result is a choropleth map where visually a change in the education can be seen in some areas. For us it is a positive idea that countries with a index of a small human development  increased the literacy rate and that is why we are delighted to show it with the selected representation.

<hr>


*These data correspond to the literacy measures taken on the 1970's and 1980's with respect to others taken during the 2000's and 2010's*

*The data must be stored in a single worksheet in a .xls file.*

*There are some countries that do not have measures of its literacy rate. These countries we have assigned the value 0, that is to say, that there has been no variation. We have assumed this because there are countries with a very high rate of development, so that the rate of the fabetizacion is 100% during these years.*
