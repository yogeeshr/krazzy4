package controller;

import Utils.Utils;
import org.apache.log4j.Logger;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.File;
import java.io.InputStream;
import java.util.List;

/**
 * Created by yogeesh.rajendra on 2/13/17.
 */
@Path("/")
public class APIEntry {

    static {
        File theDir = new File("/opt/spark");
        File theDir1 = new File("/opt/spark/dump");
        File videoOutDir = new File("/opt/spark/video");

        // if the directory does not exist, create it
        if (!theDir.exists()) {

            boolean result = false;

            try {
                theDir.mkdir();
                result = true;
            } catch (SecurityException se) {
                //handle it
            }

        }

        if (!theDir1.exists()) {

            boolean result = false;

            try {
                theDir1.mkdir();
                result = true;
            } catch (SecurityException se) {
                //handle it
            }
            if (result) {
                System.out.println("DIR created");
            }
        }

        // if the directory does not exist, create it
        if (!videoOutDir.exists()) {
            System.out.println("creating directory: /opt/spark/video");
            boolean result = false;

            try {
                videoOutDir.mkdir();
                result = true;
            } catch (SecurityException se) {
                //handle it
            }
            if (result) {
                System.out.println("DIR created " + videoOutDir);
            }
        }

    }

    public static Logger logger = Logger.getLogger(APIEntry.class.getName());


    @GET
    @Path("/getAPI")
    @Produces("text/plain")
    public Response getAPI() {
        try {
            System.out.println("API Get");
            return Response.status(200).entity("[ API Get SUCCESS ]").build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(503).entity("Internal server error").build();
        }
    }

//    @POST
//    @Path("/getImagesFiles")
//    @Produces("text/plain")
//    @Consumes("application/json")
//    public Response postAPI(InputStream incomingData) {
//        try {
//            List<String> htmlFileNames = Utils.getHtmlFiles(incomingData);
//            List<String> pngFiles = Utils.getImage(htmlFileNames);
//            return Response.status(200).entity(pngFiles.toString()).build();
//        } catch (Exception e) {
//            e.printStackTrace();
//            return Response.status(503).entity("Internal server error").build();
//        }
//    }

    @POST
    @Path("/getVideoFile")
    @Produces("text/plain")
    @Consumes("application/json")
    public Response getVideo(InputStream incomingData) {
        try {
            List<String> htmlFileNames = Utils.getHtmlFiles(incomingData);
            List<String> pngFiles = Utils.getImage(htmlFileNames);
            return Response.status(200).entity(pngFiles.toString()).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(503).entity("Internal server error").build();
        }
    }


}
