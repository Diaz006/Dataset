console.log("Cargando fichero vhbl.js");
d3.json ("/Users/diazbryan/Downloads/partidos2.json",{ mode: 'no-cors' }).then (function (datosCompletos) {     
console.log("Datos cargados vhbl.js");})
    
//        // Variable correspondiente a los partidos politicos
//     var datosPartidos = datosCompletos.partidos;
//     var height =500;
//     var width = 300;
//     var margin = {
//         top: 30,
//         botton: 30,
//         left:40,
//         right: 0    
//     };
    
//    //Declaramos la escala X (POSICION HORIZONTAL)     
//     var x = d3.scaleLinear()
//                     .domain ([1,6])
//                     .range ([margin.left, width - margin.right]);
                  
//     //Declaramos la escala Y (posicion vertical)
//     var y = d3.scaleLinear()
//                    .domain ([0,d3.max(datosPartidos, (d) => d.votantes)])
//                    .range ([height - margin.botton, margin.top]);
    
//      // Cambio en el escala de tres colores
//     var escalaColor = d3.scaleLinear ()
//                         .domain ([1, 5, 10])
//                         .range (["red", "grey", "blue"]);
    
//      var escala_tamanio = d3.scaleLinear()
//                             .domain(d3.extent(datosPartidos, d => d.votantes))
//                             .range([8,20]);
    
        
//      // Creamos el contenedor SVG 
//       var elementosvg = d3.select("body")
//                         .append("svg")
//                         .attr("width",width)
//                         .attr("height",height)
//                         .attr("viewBox",[0,0,width,height])
//                         .attr("style","max-width:100%; height: auto;"); 
    
        
//      // Add a rect for each bar.
//         elementosvg.append("g")
//                 .attr("fill", "steelblue")
//                 .selectAll()
//                 .data(datosPartidos)
//                 .join("rect")
//                 .attr("x", (d) => x(d.mediaAutoubicacion))
//                 .attr("y", (d) => y(d.votantes))
//                 .attr("height", (d) => y(0) - y(d.votantes))
//                 .attr("width", 35)
//                 .on ("click", d => pintarHistograma (d.partido))
//                 .on ("mouseover", d=> {pintarTooltip (d);})
//                 .on ("mouseout", borrarTooltip);
    
//     //Colocamos 
//     var tooltip = d3.select("body")
//                     .append("div")
//                     .attr("class","tooltip");
    
//     // Crear los Ejes
        
//     //Adicionando el eje X y los label
//     var ejeX = d3.axisBottom (x)
//                  .ticks (5)
//                  .tickFormat (d3.format(".0s"));
    
//     elementosvg.append("g")
//             .attr("transform", "translate (0," + (height - margin.botton) + ")")
//             .call(ejeX);
              
//     //Adicionando el eje Y y label
//     var ejeY = d3.axisLeft(y)
//                 .ticks (6)
//                 .tickFormat(d3.format(".1s"));
    
//     elementosvg.append("g")
//             .attr("transform", "translate (" + (margin.left-10) + ",0)")
//             .call(ejeY);
    
    
    
//     //SEGUNDO GRAFICO
    
//     var svghisto = d3.select("body")
//                 .append("svg")
//                 .attr("width",width)
//                 .attr("height",height);
    
//     //Reutilizar los mismos datos del eje X
//     svghisto.append("g")
//             .attr("transform", "translate (0," + (height - margin.botton) + ")")
//             .call(x);
    
//     //Crear un eje distinto para el eje Y, creo una g nueva
    
//     var gejeYhisto = svghisto.append("g")
//                             .attr("transform","translate (" + (margin.left-10) + ",0)");
    
//     // Funciones auxiliares para el Histograma
    
//     function pintarHistograma (partidoseleccionado) {
        
//         var datosHistograma = datosCompletos.histogramas[partidoseleccionado];
    
//         //Escalas
                        
//             var escalaYhistograma = d3.scaleLinear()
//                                 .domain(d3.extent(datosHistograma, d => d.y))
//                                 .range ([height-margin.botton,margin.top]);
            
//             var ejeYHistograma = d3.axisLeft (escalaYhistograma)
//                                     .ticks(5)
//                                     .tickFormat(d3.format(".0s"));
        
//             gejeYhisto.transition()
//                     .duration(2000)
//                     .ease(d3.easeBounce)     
//                     .delay(500)
//                     .call(ejeYHistograma);
        
//             svghisto.selectAll("circle")
//                 .data(datosHistograma)
//                 .attr("r", d => escala_tamanio(d.y))
//                 .attr("cx", d => x(d.x))
//                 .attr("cy", d => escalaYhistogramaistograma(d.y))
//                 .attr("fill", d => escalaColor(d.x));
        
        
//     }
    
//    //funcion para gestionar los tooltips
//     function borrarTooltip () {
//         tooltip.style("opacity",0)
//     }
        
//     function pintarTooltip (d) {
        
//         tooltip.text(d.partido + " --- " + d.mediaAutoubicacion)
//                 .style("top",d3.event.pageY + "px")
//                 .style("left", d3.event.pageX + "px")
//                 .style("opacity",1);
//     } 
     
    
// });

// miarchivo.js
