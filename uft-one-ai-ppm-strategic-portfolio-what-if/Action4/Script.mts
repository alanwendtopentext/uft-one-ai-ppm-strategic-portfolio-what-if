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
