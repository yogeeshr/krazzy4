package Utils;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by yogeesh.rajendra on 2/17/17.
 */
public class Utils {

    public static List<String> getImage(List<String> htmlFiles) throws Exception {
        List<String> images = new ArrayList<>();

        UUID idS = UUID.randomUUID();

        String[] dirs = {"/opt/spark/dump/" + idS, "/opt/spark/dump/" + idS + "/videos", "/opt/spark/dump/" + idS + "/audios",
                "/opt/spark/dump/" + idS + "/images"};

        for (String fileItem : dirs) {
            File dir = new File(fileItem);
            if (!dir.exists()) {
                dir.mkdir();
            }
        }

        int counter = 0;
        for (String file : htmlFiles) {

            UUID randId = UUID.randomUUID();

            String imagefile = "/opt/spark/dump/" + idS + "/images/" + randId + "_pic" + (counter++) + ".jpg";

            String command = "phantomjs /Users/yogeesh" +
                    ".rajendra/Documents/HUB/Personal/work/github/krazzy4/getscreenshot.js " + file + " " +
                    imagefile;


            Process p = Runtime.getRuntime().exec(command);
            p.waitFor();

            images.add(imagefile);
        }

        return images;

    }

    /**
     *
     * @param incomingData
     * @return
     * @throws IOException
     */
    public static List<String> getHtmlFiles(InputStream incomingData) throws IOException {

        StringBuilder input = new StringBuilder();
        String line = null;


        BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
        while ((line = in.readLine()) != null) {
            input.append(line);
        }


        //If JSON is empty then throw bad request
        if (input.length() <= 0) {
            return null;
        }

        String []data = input.toString().split("\\$");

        List<String> htmlFiles = new ArrayList<>();

        for ( String item : data ) {
            htmlFiles.add(item);
        }

        return htmlFiles;
    }
}
