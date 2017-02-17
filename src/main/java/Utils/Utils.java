package Utils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yogeesh.rajendra on 2/17/17.
 */
public class Utils {

    public static List<String> getImage(List<String> htmlFiles) throws Exception {
        List<String> images = new ArrayList<>();
        for (String file : htmlFiles) {
            String command = "phantomjs /Users/yogeesh" +
                    ".rajendra/Documents/HUB/Personal/work/github/krazzy4/getscreenshot.js " + file;
            Process p = Runtime.getRuntime().exec(command);
            p.waitFor();

            images.add(file + ".png");
        }
        return images;
    }
}
