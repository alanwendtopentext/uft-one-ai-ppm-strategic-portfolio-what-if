'Think this is setting a variable
AIUtil.SetContext Browser("creationtime:=0")
WizardScrollSettings=AIUtil.RunSettings.AutoScroll.GetDirection
MaxScrolls=AIUtil.RunSettings.AutoScroll.GetMaxNumberOfScrolls
AIUtil.RunSettings.AutoScroll.Disable

Do 
	'Select OPEN from the top menu
	AIUtil.FindTextBlock("OPEN").Click
Loop Until AIUtil.FindTextBlock("Portfolio Management").Exist(0)
AIUtil.RunSettings.AutoScroll.Enable WizardScrollSettings, MaxScrolls

'Select Portfolio Management from the OPEN menu
AIUtil.FindTextBlock("Portfolio Management").Click

'Select demonstration data Advantage Inc from the list of Portfolio data
AIUtil.FindTextBlock("Advantage Inc").Click

'Loop until the data for the Overview Dashboard tab of the Advantage Inc portfolio is fully displayed with Actual Cost data
Counter=0
Do
	wait(1)
	Counter=Counter+1
	Reporter.ReportEvent micDone, "Counter","The Loop has executed (buddy!) " & Counter & " Times"
	If Counter>=30 Then
		Reporter.ReportEvent micFail, "ActualCostWidget","The Actual Cost Widget, didn't display within " & Counter & " Times"
		ExitIteration
	End If
'Continue Looping until the Actual Benefit - Sum $ text displays near the Type text description which means enough dashboard detail has displayed
Loop Until AIUtil.FindTextBlock("Type", micWithAnchorBelow, AIUtil.FindTextBlock("Actual Benefit - Sum ($)")).Exist(0)
AIUtil.FindTextBlock("Type", micWithAnchorBelow, AIUtil.FindTextBlock("Actual Benefit - Sum ($)")).CheckExists True

'Second check to confirm that data displays correctly when data displays near the Actual Cost detail on the second widget
AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Actual Cost")).CheckExists True
