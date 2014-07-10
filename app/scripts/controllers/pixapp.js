'use strict';

angular.module('followboardApp')
  .controller('PixappCtrl', function ($scope, $http) {
    $scope.name = "";



    // move this into directive
    // mosaicGrid
    var idCounter = 0;
    /**
     * Creates a grid, represented by a table.
     * Each cell (td) is of .pix and has attributes representing
     * its color and other properties
     */
    var createGrid = function(width, height){
      var grid = $(document.createElement("table"))
        .addClass("grid");
      for (var i = 0; i < height; i++) {
        var pixRow = $(document.createElement("tr"));
        for (var j =  0; j < width; j++) {
          var pixel = $(document.createElement("td"))
            .addClass("pix")
            .attr("color", "white")
            .attr("row", i)
            .attr("col", j)
            .attr("id", idCounter)
            .on('dragstart', function(event) {
              event.preventDefault();
            });

            idCounter++;
          pixRow.append(pixel);
        }
        grid.append(pixRow);
      };
      $(".gridContainer").append(grid);
      $scope.grid = grid;
    }

    createGrid(21, 21);

    $(document).ready(function(){
      var curr_color = "blue";
      $(".pix").bind('mousedown', function(){
        $(this).attr("color", curr_color);
      });

      $(".swatch").bind('click', function(){
        curr_color = $(this).attr("color");
      });

      
    });

    $scope.saveGrid = function(){
      console.log("called saveGrid()");

      var colorgrid = [];
      var pixels = $(".pix")

      console.log(pixels)
      pixels.each(function(i, pix){
        // console.log("pix: ", pix);
        colorgrid.push(
          {
            "color": $(pix).attr("color")
            , "id": $(pix).attr("id")
            , "row": $(pix).attr("row")
            , "col": $(pix).attr("col")
          }
        );
      })

      console.log("colorgrid: ", colorgrid);
      $scope.colorgrid = colorgrid;

      // how to create a grid?
      // create elements, append them
      // ng-repeat?
    }
  });
