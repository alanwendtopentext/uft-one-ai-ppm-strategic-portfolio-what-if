
AIUtil.FindTextBlock("STRATEGY").Click
AIUtil.FindTextBlock("Customer Engagement").Click
AIUtil("down_triangle", micAnyText, micFromRight, 1).Click
AIUtil("down_triangle", micAnyText, micFromRight, 1).Click
AIUtil("down_triangle", micAnyText, micFromLeft, 11).Click
AIUtil("down_triangle", micAnyText, micFromLeft, 11).Click
AIUtil.FindTextBlock("Idea Sharing", micFromLeft, 1).Hover
AIUtil("right_triangle", micAnyText, micFromBottom, 1).Click
AIUtil.FindTextBlock("Customer experience of $").CheckExists True


