package com.blanka.jdbcProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.Collection;

@RestController
public class PhotozController {

    private final PhotozService photozService;

    public PhotozController(@Autowired PhotozService photozService) {
        this.photozService = photozService;
    }

    @GetMapping("/photoz")
    public Collection<Photo> getPhotos() {
        return photozService.get();
    }

    @PostMapping("/photoz")
    public Photo uploadPhoto(@RequestPart("data") MultipartFile file,
                             @RequestParam("circleColor") String circleColor) throws IOException {
        if (file.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File is empty");
        }
        return photozService.save(file.getOriginalFilename(), file.getContentType(), file.getBytes(), circleColor);
    }

    @DeleteMapping("/photoz/{id}")
    public void deletePhoto(@PathVariable String id) {
        Photo photo = photozService.remove(id);
        if (photo == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}
