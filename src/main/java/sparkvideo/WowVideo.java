package sparkvideo;

/**
 * Created by krishna.tiwari on 2/17/17.
 */
public class WowVideo {


    public static boolean create(String imageDirectory, String output) {
        try {
            String cmd="ffmpeg -r 1/5 -i " + imageDirectory + "pic%04d.jpg -c:v libx264 -vf fps=25,format=yuv420p " + output;
            System.out.println(cmd);
            Process p = Runtime.getRuntime().exec(cmd);
            p.waitFor();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean create(String imageDirectory, String mp3file, String output) {
        try {
            String cmd="ffmpeg -r 1/5 -i " + imageDirectory + "pic%04d.jpg -i " + mp3file + " -c:v libx264 -vf fps=25,format=yuv420p " + output;
            System.out.println(cmd);
            Process p = Runtime.getRuntime().exec(cmd);
            p.waitFor();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static boolean createWithWeight(String imageDirectory, int [] weight, String mp3file, String output) {
        try {
            String cmd="ffmpeg -r 1/5 -i " + imageDirectory + "pic%04d.jpg -i " + mp3file + " -c:v libx264 -vf fps=25,format=yuv420p " + output;
            System.out.println(cmd);
            Process p = Runtime.getRuntime().exec(cmd);
            p.waitFor();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public static void main(String[] args) {
        create("/opt/spark/dump/fk/images/","/opt/spark/dump/fk/audio/fk.mp3","/opt/spark/dump/fk/video/fkvideo2.mp4");
    }
}
