import time
import random

messages = [
    "Eres la razón por la que sonrío cada día.",
    "Te amo más de lo que las palabras pueden expresar.",
    "Eres mi sol en días nublados.",
    "Contigo, el mundo es un lugar mejor.",
    "Mi amor por ti crece cada día."
]

def show_message():
    print("Un mensaje especial para ti:")
    time.sleep(1)
    print("❤️" * 10)
    time.sleep(1)
    print(random.choice(messages))
    time.sleep(1)
    print("❤️" * 10)

if __name__ == "__main__":
    show_message()
