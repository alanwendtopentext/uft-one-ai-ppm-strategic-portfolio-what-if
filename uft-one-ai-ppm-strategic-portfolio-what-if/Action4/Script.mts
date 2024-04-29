AIUtil.FindTextBlock("BACKLOG").Click
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("BACKLOG").Click
AIUtil.FindTextBlock("Name", micWithAnchorAbove, AIUtil.FindTextBlock("BACKLOG")).CheckExists True
AIUtil.FindTextBlock("[BG] Adv antage Ai").CheckExists True

AIUtil("button", "", micFromLeft, 1).Click
AIUtil("button", "", micFromLeft, 2).Click
AIUtil("button", "", micFromLeft, 3).Click
AIUtil("button", "", micFromRight, 1).Click
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.Calendar.CheckExists True

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
