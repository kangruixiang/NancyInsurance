from pyautogui import typewrite as ty
from pyautogui import keyDown as kd
from pyautogui import keyUp as ku
from pyautogui import click
from pyautogui import press
from pyautogui import FAILSAFE
import time
import simpleaudio as sa
FAILSAFE = True

# Availity codes:
a212 = ("99212", "25", "55.00", "1")
a203 = ("99203", "25", "85.00", "1")
a213 = ("99213", "25", "65.00", "1")
a813 = ("97813", "", "75.00", "1")
a814 = ("97814", "", "140.00", "2")
a140 = ("97140", "GP", "60.00", "2")
a026 = ("97026", "GP", "40.00", "4")
a124 = ("97124", "GP", "60.00", "2")

# Procedural code order. Type Here:
availity = [a213, a813, a814, a140]

next = '\t'


class Insurance():

    def get_patient(self):
        """new patient vs old patient."""

        print('Enter 1 for new patient. Enter 2 for old patient')
        self.patient = input()

    def get_date(self):
        """Gets the dates of services."""

        self.date = []
        while True:
                print('Enter dates in mmddyyyy format. Enter 1 when finished.')
                self.days = input()
                if self.days == str(1):
                        break
                self.date = self.date + [self.days]

    def get_diagnosis(self):
        """gets diagnosis"""

        self.code = ['A', 'AB', 'ABC', 'ABCD', 'ABCDE']
        print('Enter number of diagnosis codes.')
        self.diagnosis = input()
        self.diagnosis_code = self.code[int(self.diagnosis) - 1]

    def availity_line(self):
        """returns each line minus the dates of services"""

        # time.sleep(2)
        ty(f'{self.pfinal[0]}', 0.1)
        time.sleep(1)
        ty(next)
        time.sleep(1)
        ty(self.pfinal[1])
        ty(next*5)
        
        for i in range(0, int(self.diagnosis)):
            press('down')
            ty(next)
            time.sleep(1)
            kd('shift')
            ty(next)
            ku('shift')
            # press('down')

        ty(next)
        ty(self.pfinal[2])
        ty(next*2)
        ty(self.pfinal[3])
        ty(next*4)
        press('space')
        time.sleep(1)
        kd('shift')
        ty(next*21)
        ku('shift')

    def availity(self):
        """loops the code over every date for availity"""

        """make a new list based off original"""
        availity2 = list(availity)

        """handles initial visit"""
        print(self.patient)
        if self.patient == "1":
            print('Yes')
            availity2[0] = a203

        print(availity2)

        for n in self.date:
            for i in availity2:
                ty(n, 0.1)
                ty(next*2)
                ty(n, 0.1)
                ty(next*4)
                ty('11', 0.1)
                time.sleep(1)
                ty(next*2)
                self.pfinal = i
                self.availity_line()
                availity2[0] = availity[0]

def main():
    I = Insurance()
    I.get_patient()
    I.get_date()
    I.get_diagnosis()
    time.sleep(9)
    I.availity()
 
    wave_obj = sa.WaveObject.from_wave_file("finish.wav")
    play_obj = wave_obj.play()
    play_obj.wait_done()

main()
