package model;

/**
 * Created by krishna.tiwari on 2/17/17.
 */
public class Screen {
    String image;
    int weight;


    public Screen(String image, int weight) {
        this.image = image;
        this.weight = weight;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
