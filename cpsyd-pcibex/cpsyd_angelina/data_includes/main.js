PennController.ResetPrefix(null)

Sequence("instructions", "practice-trial", "pre-experiment", "trials")

newTrial("instructions",
    defaultText
        .center()
        .print()
        ,
    newText("instructions-1", "Welcome to Angie's experiment (: wooo! PLEASE READ!"),
    newText("blank-1", " "),
    newText("instructions-2", "In this experiment, you will be given a prompt to identify a color, which will be shown as a square after the question."),
    newText("blank-2", " "),
    newText("instructions-3", "You will then be shown two images. Please choose the image that has the correct <b> word </b> representation of the color of the square."),
    newText("blank-3", " "),
    newText("instructions-4", "For example, if the color of the square is blue, choose the image that has the word <b>blue</b> written on it."),
    newText("blank-4", " "),
    newText("instructions-5", "You will use two keys 'F' and 'J' (they have little notches on your keyboard) to answer the question."),
    newText("blank-7", " "),
    newText("instructions-6", "Use 'F' to select the left image, and 'J' to select the right image. Please note that the F and J key are associated with the position of the options on the screen and are NOT associated with the question itself."),
    newText("blank-5", " "),
    newText("instructions-7", "<b>Be sure to read the question carefully! </b>"),
    newText("blank-6", " "),
    newText("instructions-8", "You will first be presented with a sample problem."),
    newText(" "),
    
    newButton("wait", "Click to start the TRIAL experiment.")
        .center()
        .print()
        .wait()
)

newTrial("practice-trial",
    newVar("correct").global()
    ,
    
    newTimer("pre-trial", 500).start().wait()
    ,
    
    // Adds first practice test image.
    newImage("practice1", "p_1.png")
        .size(200, 200)
    ,
    
    // Adds second practice test image.
    newImage("practice2", "p_2.png")
        .size(200, 200)
    ,
    
    newCanvas("practiceSideBySide", 450, 200)
        .add(0, 0, getImage("practice1"))
        .add(250, 0, getImage("practice2"))
        .center()
        .print()
    ,
    
    newCanvas("practice-question", 600, 100)
        .add(200, 50, newText("practiceQuestion", "Which color is this?").center().print())
        .add(350, 50, newCanvas("practice-box", 20, 20).css("background-color", "blue").center().print())
        .center()
        .print()
    ,
    
    newScale("practiceAnswer", "Left (F)", "Right (J)")
        .button()
        .keys("F", "J")
        .center()
        .log()
        .callback(getTimer("practiceTime").stop())
        .print()
    ,
    
    newTimer("practiceTime", 7000).start()
    ,
    
    getTimer("practiceTime").wait()
    ,
    
    getScale("practiceAnswer")
        .test.selected("Left (F)")
        .success( 
            getVar("correct").set(true),
            newText("Correct!").center().print()
        )
        .failure( 
            getVar("correct").set(false),
            newText("Incorrect ):").center().print()
        )
    ,
    
    newTimer("post-practice", 1000).start().wait()
);

// newTrial("practice-trial",
//     newVar("correct").global()
//     ,
    
//     newTimer("pre-trial", 500).start().wait()
//     ,
    
//     // Adds first practice test image.
//     newImage("practice1", "p_1.png")
//         .size(200, 200)
//     ,
    
//     // Adds second practice test image.
//     newImage("practice2", "p_2.png")
//         .size(200, 200)
//     ,
    
//     newCanvas("together", 400, 200)
//         .add(0, 0, getImage("practice2"))
//         .add(200, 0, getImage("practice2"))
//     ,
    
//     newCanvas("practice-question", 600, 100)
//         .add(200, 50, newText("Which color is this?"))
//         .add(350, 50, newCanvas("practice-box", 20, 20).css("background-color", blue).center().print())
//     ,
    
//     newScale("practice-answer", "Left (F)", "Left (J)")
//         .button()
//         .keys("F", "J")
//         .center()
//         .log()
//         .callback(getTimer("practice-time").stop())
//         .print()
//     ,
    
//     newTimer("practice-time", 7000).log().start()
//     ,
    
//     getTimer("practice-time").wait()
//     ,
    
//     getScale("practice-answer")
//         .test.selected("Right (J)")
//         .success (
//             getVar("correct").set(true),
//             newText("Correct!").center().print()
//             )
//         .failure (
//             getVar("correct").set(false),
//             newText("Incorrect ):".center().print())
//             )
//     ,
    
//     newTimer("post-practice", 1000).start().wait()
// )


newTrial("pre-experiment",

    defaultText
        .center()
        .print()
    ,
    newText("pre-experiment-instruction", "When you are ready, click below to begin!")
    ,
    newText("pre-experiment-instruction-1", "If there are any concerns or questions, please don't hesitate to reach out to Angie. (:")
    ,
    newText(" ")
    ,
    newButton("wait", "Click to begin the experiment!")
        .center()
        .print()
        .wait()
)

Template ("test2.csv", row =>
    newTrial( "trials",
        newVar("correct").global()
        ,
        // newTimer("pre-trial", 500).start().wait()
        // ,
        // // Adds first image.
        // newCanvas("image1", 200, 200)
        //     .add(0, 0, newText("word1", row.Word1).color(row.Color1).css('font-size', '5em'))
        //     .css("background-color", row.Background1)
        //     .center()
        //     .print()
        // ,
        
        // // Adds second image
        // newCanvas("image2", 200, 200)
        //     .add(0, 0, newText("word2", row.Word2).color(row.Color2).css('font-size', '5em'))
        //     .css("background-color", row.Background1)
        //     .center()
        //     .print()
        // ,
        
        // Adds first image (test2.csv)
        newImage("image1", row.Image1)
            .size(200, 200)
        ,
        
        // Adds second image (test2.csv)
        newImage("image2", row.Image2)
            .size(200, 200)
        ,
        
        // Puts them side by side
        newCanvas("side-by-side", 450, 200)
            .add(0, 0, getImage("image1"))
            .add(250, 0, getImage("image2"))
            .center()
            .print()
            .log()
        ,
        
        
        // // Adds the question
        // newText("question", row.Question)
        //     .center()
        //     .print()
        // ,
        
        // Spacer
        // newText(" ")
        // ,
        // newText(" ")
        // ,
        // newText(" ")
        // ,
        
        // Adds the question with a colored box.
        newCanvas("question-box", 600, 100)
            .add(200, 50, newText("question", row.Question).center().print())
            .add(350, 50, newCanvas("color-box", 20, 20).css("background-color", row.Word).center().print())
            .center()
            .print()
        ,
        
        newVar("RT")
            .global()
            .set(v=>Date.now())
        ,
        
        newScale("answer", "Left (F)", "Right (J)")
            .button()
            .keys("F","J")
            .center()
            .log()
            .callback( getTimer("allotted time").stop() )
            .print()
        ,
        
        newTimer("allotted time", 7000).start()
        ,
        
        getTimer("allotted time").wait()
        ,
        
        getScale("answer")
            .test.selected(row.Correct=='F' ? "Left (F)" : "Right (J)")
            .success( 
                getVar("correct").set(true),
                newText("Correct!").center().print()
            )
            .failure( 
                getVar("correct").set(false),
                newText("Incorrect...").center().print()
            )
        ,
        
        getVar("RT")
            .set(v=>Date.now()-v)
        ,    
        newTimer("post-trial", 1000).start().wait()    
        
        )
        
    // .log("Word", row.Word)
    // .log("Image1", row.Image1)
    // .log("Image2", row.Image2)
    // .log("Question", row.Question)
    .log("Type", row.Type)
    .log("Correct", getVar("correct"))
    .log( "ReadingTime" , getVar("RT") )
);