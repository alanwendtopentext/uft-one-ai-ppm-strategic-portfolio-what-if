AIUtil.SetContext Browser("creationtime:=0")

AIUtil.FindTextBlock("OPEN").Click

AIUtil.FindTextBlock("Portfolio Management").Click

AIUtil.FindTextBlock("Advantage Inc").Click

Counter=0
Do
	wait(1)
	Counter=Counter+1
	Reporter.ReportEvent micDone, "Counter","The Loop has executed (buddy!) " & Counter & " Times"
	If Counter>=30 Then
		Reporter.ReportEvent micFail, "ActualCostWidget","The Actual Cost Widget, didn't display within " & Counter & " times"
		ExitIteration
	End If
Loop Until AIUtil.FindTextBlock("Type", micWithAnchorBelow, AIUtil.FindTextBlock("Actual Benefit - Sum ($)")).Exist(0)
AIUtil.FindTextBlock("Type", micWithAnchorBelow, AIUtil.FindTextBlock("Actual Benefit - Sum ($)")).CheckExists True



AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Actual Cost")).CheckExists True
