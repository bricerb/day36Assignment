package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Brice on 9/22/16.
 */

@RestController
public class MakeChocolateJSONController {

    @RequestMapping(path = "/make-chocolate.json", method = RequestMethod.GET)
    public ChocolateSolution makeChocolateJSON(int smalls, int bigs, int goal) {
        ChocolateSolver mySolver = new ChocolateSolver();
        List<ChocolateSolution> chocolateList = new ArrayList<ChocolateSolution>();
        ChocolateSolution myChocolate = new ChocolateSolution();
        myChocolate = mySolver.makeChocolate(smalls, bigs, goal);
        chocolateList.add(myChocolate);
        return myChocolate;
    }

}
