
AIUtil.FindTextBlock("STRATEGY").Click
AIUtil.FindTextBlock("Customer Engagement").Click
AIUtil("down_triangle", micAnyText, micFromRight, 1).Click
AIUtil("down_triangle", micAnyText, micFromRight, 1).Click
AIUtil("down_triangle", micAnyText, micFromLeft, 11).Click
AIUtil("down_triangle", micAnyText, micFromLeft, 11).Click
AIUtil.FindTextBlock("Idea Sharing", micFromLeft, 1).Hover
AIUtil("right_triangle", micAnyText, micFromBottom, 1).Click


'Loop until the data for the Overview Dashboard tab of the Advantage Inc portfolio is fully displayed with Actual Cost data
Counter=0
Do
	wait(1)
	Counter=Counter+1
	Reporter.ReportEvent micDone, "Counter","The Loop has executed (buddy!) " & Counter & " Times"
	If Counter>=30 Then
		Reporter.ReportEvent micFail, "Customer experience of $","The Customer experience of $ data, didn't display within " & Counter & " Times"
		ExitIteration
	End If
'Continue Looping until the Customer experience of $ text displays, which means enough dashboard detail has displayed

Loop Until AIUtil.FindTextBlock("Customer experience of $").Exist(0)
AIUtil.FindTextBlock("Customer experience of $").CheckExists True


