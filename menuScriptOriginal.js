<!-- <script type="text/javascript" language="JavaScript">
<!---
// Use Freely as long as following disclaimer is intact:
//---------------------------------------------------------------
// Cross Browser Multi-Orientation Menu v1.2 11th February 2004
// Written by Rik Comery. www.ricom.co.uk, support at www.ricom.co.uk           
// All rights reserved.                                         
// Featured in the SimplytheBest DHTML Scripts Library at http://simplythebest.net/scripts/

//  MENU ITEMS - DUPLICATE THIS ENTIRE SECTION FOR MULTIPLE MENUS.   
var Menu1 = new Array ()
var subMenu1 = new Array ()

   Menu1[0] = new Array("Home", "http://home.comcast.net/~talidani/home.htm","_top", "left")
     subMenu1[0] = new Array()
	 
   Menu1[1] = new Array("About", "","_top", "left")
     subMenu1[1] = new Array()

   Menu1[2] = new Array("Cakes ", "","_top", "left")
     subMenu1[2] = new Array()
     subMenu1[2][0] = new Array ("Birthday", "http://home.comcast.net/~talidani/pages/cakes/birthday/birthdayMain.htm","_top")
     subMenu1[2][1] = new Array ("Holiday", "http://home.comcast.net/~talidani/pages/cakes/holiday/holidayMain.htm","_top")
     subMenu1[2][2] = new Array ("Celebration", "http://home.comcast.net/~talidani/pages/cakes/celebration/celebrationMain.htm","_top")
     subMenu1[2][3] = new Array ("Wedding/Anniversary", "http://home.comcast.net/~talidani/pages/cakes/wedding/weddingMain.htm","_top")
     
   Menu1[3] = new Array("Cupcakes", "http://home.comcast.net/~talidani/pages/cupcakes/cupcakesMain.htm","_top", "left")
     subMenu1[3] = new Array()
   
   Menu1[4] = new Array("Desserts", "http://home.comcast.net/~talidani/pages/desserts/dessertsMain.html","_top", "left")
     subMenu1[4] = new Array()
	 
   Menu1[5] = new Array("Latest Creations", "http://home.comcast.net/~talidani/pages/latestMain.html","_top", "left")
     subMenu1[5] = new Array()
     
   Menu1[6] = new Array("Contact", "mailto:talidani@comcast.net","_top", "left")
     subMenu1[6] = new Array()
	

////// FORMAT MENU
menuStyle = "flat"                                   // Menu Style (flat, 3d)
cellPadding = 3                                      // Cell Padding
cellBorder = 1                                       // Include table border (0 for no border)
verticalOffset = 0                                   // Vertical offset of Sub Menu. 
horizontalOffset = 0                                 // Horizontal offset of Sub Menu. 
subMenuDelay = 2                                     // Time sub menu stays visible for (in seconds)
subIndicate = 1                                      // Show if a sub menu is present (0 for "no")
indicator = ""  									 // Symbol to show if a sub menu is present (subIndicate must be to set to 1)
                                                     // Use standard HTML <img> tag. You can use a character instead of an image. 
                                                     // e.g.      indicator = ">" or "<img src='images/arrow-down.gif' border='0'>"
// Main Menu Items
borderColor = "Black"                      // Border Colour (flat mode only)
borderHighlight = "#97BBD3"                // Border Highlight Colour (3d mode only) originally it was: "#97BBD3"
borderShadow = "#31556D"                   // Border Shadow Colour (3d mode only) originally it was: "#31556D"
menuBackground = "#00CCFF"                 // Cell Background Colour originally it was: "#2b83c4"
menuHoverBackground = "#00FFFF"            // Cell Background Colour on mouse rollover was : "beige"
fontFace = "arial"                         // Font Face
fontColour = "#000000"                     // Font Colour was: "#FFFFFF" 
fontHoverColour = "#000000"                // Font Colour on mouse rollover was: 2b83c4
fontSize = "8pt"                           // Font Size
fontDecoration = "none"                    // Style of the link text (none, underline, overline, line-through)
fontWeight = "normal"                      // Font Weight (normal, bold)

// Sub Menu Items
sborderColor = "Black"                     // Border Colour (flat mode only)
sborderHighlight = "#E9E9E2"               // Border Highlight Colour (3d mode only)
sborderShadow = "#83837C"                  // Border Shadow Colour (3d mode only)
smenuBackground = "#00CCFF"                 // Cell Background Colour was: "beige"
smenuHoverBackground = "#00FFFF"          // Cell Background Colour on mouse rollover was: #2b83c4
sfontFace = "arial"                        // Font Face
sfontColour = "#000000"                    // Font Colour was: 2b83c4
sfontHoverColour = "#000000"              // Font Colour on mouse rollover was: "#FFFFFF" 
sfontSize = "8pt"                          // Font Size
sfontDecoration = "none"                   // Style of the link text (none, underline, overline, line-through)
sfontWeight = "normal"                     // Font Weight (normal, bold)
sShadow = 1

////// END FORMAT MENU

quantity = 1

////// DO NOT EDIT BELOW THIS LINE

// Browser Sniffer
var isIE = (document.getElementById && document.all)?true:false;
var isNS4 = (document.layers)?true:false;
var isNS6 = (document.getElementById && !document.all)?true:false;

var timer;
var obj = (isIE)?"document.all":"document.getElementById"

styleBorder=(menuStyle.toLowerCase() == "flat")?cellBorder:0 

// Menu Styles
document.writeln ('<style>');
document.writeln ('.rcMenuStatic {font-family:'+fontFace+';font-size:'+fontSize+';color:'+fontColour+';font-weight:'+fontWeight+';background-color:'+menuBackground+'; cursor:hand; text-decoration:'+fontDecoration+'}');
document.writeln ('.rcMenuHover  {font-family:'+fontFace+';font-size:'+fontSize+';color:'+fontHoverColour+';font-weight:'+fontWeight+';background-color:'+menuHoverBackground+'; cursor:hand; text-decoration:'+fontDecoration+'}');
document.writeln ('.rcSubMenuStatic {font-family:'+sfontFace+';font-size:'+sfontSize+';color:'+sfontColour+';font-weight:'+sfontWeight+';text-decoration:'+sfontDecoration+';background-color:'+smenuBackground+'; cursor:hand}');
document.writeln ('.rcSubMenuHover  {font-family:'+sfontFace+';font-size:'+sfontSize+';color:'+sfontHoverColour+';font-weight:'+sfontWeight+';text-decoration:'+sfontDecoration+';background-color:'+smenuHoverBackground+'; cursor:hand}');
document.writeln ('</style>');

// Build and show the main menu items
function showMenus(quant,definedOrientation)
{
  if(definedOrientation!=""){orientation=definedOrientation}
  if (orientation.toLowerCase() == "vertical"){document.writeln ('<table border="0" cellpadding="0" cellspacing="'+styleBorder+'" bgColor="'+borderColor+'">')}
  else{document.writeln ('<table border="0" cellpadding="0" cellspacing="'+styleBorder+'" bgColor="'+borderColor+'"><tr>')}  
  for (x=0; x<eval("Menu"+quant).length; x++)
  {
    if (orientation.toLowerCase()=="vertical") document.writeln('<tr>')
    document.writeln ('<td onclick="tdMouseClick(\''+quant+'mainLink'+x+'\')" onMouseOver="hoverMenu(); popDown(\''+quant+'\','+x+', \''+quant+'button'+x+'\',\''+orientation+'\'); " onMouseOut="clearMenu('+quant+','+x+')" ')
    if (menuStyle.toLowerCase() == "3d"){document.writeln ('style="border-left:'+cellBorder+'px solid '+borderHighlight+';border-top:'+cellBorder+'px solid '+borderHighlight+';border-right:'+cellBorder+'px solid '+borderShadow+';border-bottom:'+cellBorder+'px solid '+borderShadow+';"');}        
    document.writeln ('><div id="'+quant+'button'+x+'"><table border="0" cellpadding="'+cellPadding+'" cellspacing="0" width="100%"><tr><td class="rcMenuStatic" id="'+quant+'cell'+x+'" nowrap>');
    document.writeln ('<a id="'+quant+'mainLink'+x+'" href="'+eval("Menu"+quant)[x][1]+'" target="'+eval("Menu"+quant)[x][2]+'" class="rcMenuStatic">'+eval("Menu"+quant)[x][0]+'</a></td>');
    if (subIndicate == 1&&eval("subMenu"+quant)[x].length>=1){
      document.writeln('<td class="rcMenuStatic" id="'+quant+'cell'+x+'a" align="right">');
      document.writeln ('<a id="'+quant+'mainLink'+x+'a" href="'+eval("Menu"+quant)[x][1]+'" target="'+eval("Menu"+quant)[x][2]+'" class="rcMenuStatic">'+indicator+'</a></td>');}
    document.writeln ('</tr></table></div></td>');    
    if (orientation.toLowerCase()=="vertical") document.writeln('</tr>')
  }
  if (orientation.toLowerCase() == "vertical"){document.writeln ('</table>');}
  else{document.writeln ('</tr></table>');}   
  

// Build the sub menu items
  for (x=0; x<eval("Menu"+quant).length; x++)
  { 
    if (eval("subMenu"+quant)[x].length > 0)
    {     
      document.writeln ('<div id="'+quant+'MENU'+x+'" style="visibility:hidden; position:absolute; z-index:2" >');
      document.writeln ('<table border="0" cellpadding="'+cellPadding+'" cellspacing="'+styleBorder+'" bgColor="'+sborderColor+'">');
      for (y=0; y<eval("subMenu"+quant)[x].length; y++)
      {
        document.writeln ('<tr><td id="'+quant+'subMenu'+x+y+'" class="rcSubMenuStatic" onMouseOver="hoverMenu(); highlightMenu(\'sub\','+x+','+y+',\'\','+quant+')" onMouseOut="clearMenu('+quant+','+x+');" onclick="tdMouseClick(\''+quant+'subLink'+x+y+'\')" nowrap')
        if (menuStyle.toLowerCase() == "3d"){document.writeln ('style="border-left:'+cellBorder+'px solid '+sborderHighlight+';border-top:'+cellBorder+'px solid '+sborderHighlight+';border-right:'+cellBorder+'px solid '+sborderShadow+';border-bottom:'+cellBorder+'px solid '+sborderShadow+';"');}
        document.writeln ('><a id="'+quant+'subLink'+x+y+'" href="'+eval("subMenu"+quant)[x][y][1]+'" target="'+eval("subMenu"+quant)[x][y][2]+'" class="rcSubMenuStatic">'+eval("subMenu"+quant)[x][y][0]+'</a></td></tr>');
      }
      document.writeln ('</table></div>');
    }
  }
} 

// Change colour or menu and submenu items when the mouse hovers over.  
function highlightMenu(element,mainMenu,dropMenu,state,quant)
{
  hoverMenu();
  state=(state == "hover")?"rcMenuHover":"rcMenuStatic"
  if (element == "sub")
  {
    for (x=0; x < eval("subMenu"+quant)[mainMenu].length; x++)
     {
      eval(obj+'("'+quant+'subMenu'+mainMenu+x+'").className = "rcSubMenuStatic"')
      eval(obj+'("'+quant+'subLink'+mainMenu+x+'").className = "rcSubMenuStatic"')
    }   
    eval(obj+'("'+quant+'subMenu'+mainMenu+dropMenu+'").className="rcSubMenuHover"')
    eval(obj+'("'+quant+'subLink'+mainMenu+dropMenu+'").className="rcSubMenuHover"')
  }
  else
  {
    eval(obj+'("'+quant+'cell'+mainMenu+'").className = "'+state+'"')
    eval(obj+'("'+quant+'mainLink'+mainMenu+'").className = "'+state+'"')
    if (subIndicate == 1&&eval("subMenu"+quant)[mainMenu].length>=1)
    {
      eval(obj+'("'+quant+'cell'+mainMenu+'a").className = "'+state+'"')
      eval(obj+'("'+quant+'mainLink'+mainMenu+'a").className = "'+state+'"')
    }
  }
}

// Find positioning for sub menus
function getOffset(obj, dim) 
{
  if(dim=="left") 
  {     
    oLeft = obj.offsetLeft;    
    while(obj.offsetParent!=null) 
    {    
      oParent = obj.offsetParent     
      oLeft += oParent.offsetLeft 
      obj = oParent 	
    }
    return oLeft
  }
  else if(dim=="top")
  {
    oTop = obj.offsetTop;
    while(obj.offsetParent!=null) 
    {
      oParent = obj.offsetParent
      oTop += oParent.offsetTop
      obj = oParent 	
    }
    return oTop
  }
  else if(dim=="width")
  {
    oWidth = obj.offsetWidth
    return oWidth
  }  
  else if(dim=="height")
  {
    oHeight = obj.offsetHeight
    return oHeight
  }    
  else
  {
    alert("Error: invalid offset dimension '" + dim + "' in getOffset()")
    return false;
  }
}

// Show sub menus
function popDown(quant, param, id, orientation)
{
  var cellBorderOffset = (isNS6)?cellBorder:eval(cellBorder*2)
  var browserAdjustment = (isNS6)?cellBorder:0
  var menu;
  var button;

  if (id)
  {    
    getOffset(eval(obj+'(id)'),'left');
    getOffset(eval(obj+'(id)'),'top');    
    getOffset(eval(obj+'(id)'),'width');  
    getOffset(eval(obj+'(id)'),'height');
    
    if (eval("Menu"+quant+"["+param+"][3]")=="right") 
    { 
      oLeft=oLeft  
      oLeft=oLeft+oWidth; 
      getOffset(eval(obj+'("'+quant+'MENU'+param+'")'),'width');
      oLeft=oLeft-oWidth ;
      alignAdjustment = cellBorder*2 + 1
    }

    else 
    {
      alignAdjustment = 0
      oLeft=oLeft
    }    
  }  

  
  n = 0;    
  while (n < eval("Menu"+quant).length)
  {          
    menu = quant+"MENU"+n
    if (param == n)
    {
      theObj = eval(obj+'(menu)');
      if (theObj)
      {
         theObj.style.visibility = "visible"

          if (orientation.toLowerCase()=="vertical"){
            theObj.style.left=(menuStyle.toLowerCase()=="flat")?oLeft+oWidth+cellBorder+horizontalOffset:oLeft+oWidth+cellBorderOffset+horizontalOffset;
            theObj.style.top=(menuStyle.toLowerCase()=="flat")?oTop-cellBorder+verticalOffset:oTop+verticalOffset-browserAdjustment}
          else{
            theObj.style.left=(menuStyle.toLowerCase()=="flat")?oLeft-cellBorder+horizontalOffset+alignAdjustment:oLeft+horizontalOffset-browserAdjustment+alignAdjustment;
            theObj.style.top=(menuStyle.toLowerCase()=="flat")?oTop+oHeight+cellBorder+verticalOffset:oTop+oHeight+cellBorderOffset+verticalOffset;}
        }
      
       highlightMenu('main',n,'','hover',quant)
       if (eval("subMenu"+quant)[param].length > 0)
       {
         for (x=0; x<eval("subMenu"+quant)[param].length; x++)
         {
           eval (obj+'("'+quant+'subMenu'+param+x+'").className = "rcSubMenuStatic"')
           eval (obj+'("'+quant+'subLink'+param+x+'").className = "rcSubMenuStatic"')         
         }
       }
    }
    else 
    {  
      for (x=1; x<quantity+1; x++)
      {       
        menu = x+"MENU"+n   
        //alert(menu)     
        if (eval(obj+'(menu)'))
        {
          eval(obj+'(menu).style.visibility = "hidden"')            
        }
        highlightMenu ('main',n,'','static',quant)
      }
    }
    n++
  }  
}

// Re-set timer for sub menus
function hoverMenu()
{
  if(timer)
  clearTimeout(timer)
}

// Set timer for sub menus
function clearMenu(quant,menu)
{
  setDelay = subMenuDelay*1000
  delay = (eval("subMenu"+quant)[menu].length > 0)?setDelay:1
  
  timer = setTimeout("popDown("+quant+","+(eval("Menu"+quant).length + 1)+")",delay)
}

// when you click the box, perform the same function as if the user had clicked the hyperlink
function tdMouseClick(theElement)
{
  eval(obj+'(theElement).click()')
}
//-->
<!-- </script>
