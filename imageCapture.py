#!/bin/bash/python3

import cv2
import pytesseract
from pytesseract import Output
from pdf2image import convert_from_path
from testFile import Parent


class Image_manipulation(Parent):

    if Parent.flag == 0:

        # discern whether the user uploaded a pdf file or will capture their
        # own image
        pdf_img = convert_from_path(Parent.originFile)

        # converting recieved pdf file to readable image

        for idx in range(len(pdf_img)):
            pdf_img[idx].save('pdf_page_' + str(idx+1) + '.PNG', 'PNG')

            # saving each image of the pdf to an individual image

        img = cv2.imread('pdf_page_1.PNG', 0)

        # because all blood labs follow the same format we save only the first
        # page to be processed
    elif Parent.flag == 1:
        key = cv2.waitKey(1)

        # asserting the camera waits for a key to be inputted before closing
        webcam = cv2.VideoCapture(0)

        # opening the designated camera. In this case 0 means we're using the
        # default camera
        idx = 1

        # index saving the number of pictures taken by the user
        while webcam.isOpened:

            # loop to keep the camera running continuously
            try:
                check, frame = webcam.read()

                # webcam read returns information such as if it is funcioning
                # correctly (saved under check) and the size of the window
                # (saved under frame)
                cv2.imshow("capture", frame)

                # shows the user the frames that the camera sees
                key = cv2.waitKey(1)

                # resets the key
                if key == ord('s'):

                    # verifies that the key pressed by the user is s
                    cv2.imwrite(filename="captured_IMG_" + str(idx) + ".jpg",
                                img=frame)

                    # saves the image in an ascending order to a local file
                    img = cv2.imread("captured_IMG_" + str(idx) + ".jpg", 0)

                    # retrieving the saved image in a variable to be processed
                    # later
                    idx += 1

                    # raise the index by one
                elif key == ord('q'):

                    # check if the key pressed is q
                    webcam.release()

                    # close the webcam
                    cv2.destroyAllWindows

                    # destroy any windows created while using the program
                    break  # break the loop
            except (KeyboardInterrupt):

                # safeguard against keyboard malfunctions that closes
                # everything
                webcam.release
                cv2.destroyAllWindows

    def blur(img, param):  # function to clear any blur from the image
        img = cv2.medianBlur(img, param)
        return img

    def threshold(img):  # function to define the edges of the image and shapes
        img = cv2.threshold(img, 0, 255,
                            cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
        return img
    rawData = pytesseract.image_to_data(img,
                                        output_type=Output.DICT)
    # processing the image and turning the defined shapes to readable words
    # inside a dictionary within the key: "text"

    def dataProcessing(rawData):
        filteredData = list(filter(None, rawData["text"]))
        # filtering the returned "text" key to eliminate any empty strings and
        # converting the key:value to a string
        start = filteredData.index('Range')
        # determining a start point inside of "text"
        end = filteredData.index('TEST')
        # determining an end point within "text"
        finalData = filteredData[start:end]

        return (finalData)
        # returning a final version of the string that slices any unnecesary
        #   information within

    cv2.destroyAllWindows  # close any remaining windows
