dt = DateAdd("d",1,date)
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set "HP"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "London"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Paris" @@ hightlight id_;_1966745272_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate dt
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Economy"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select 1
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "nanangf"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
Wait(3) @@ hightlight id_;_13635670_;_script infofile_;_ZIP::ssf6.xml_;_
'add
ordernumberVar = WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order Complete").GetROProperty("name") @@ hightlight id_;_2049940120_;_script infofile_;_ZIP::ssf7.xml_;_
ordernumberVar = Mid(ordernumberVar,(inStr(ordernumberVar, "order ")+7),4)
Parameter("outParam") = ordernumberVar
TestArgs("ParamGlobal") = ordernumberVar
'MsgBox ordernumberVar
DataTable.Value("orderNumber","Global") = ordernumberVar
WpfWindow("Micro Focus MyFlight Sample").Close
