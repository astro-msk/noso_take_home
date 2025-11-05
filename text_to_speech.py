ximport os
import assemblyai as aai
from dotenv import load_dotenv

load_dotenv()

aai.settings.api_key = os.getenv("ASSEMBLY_API_KEY")

def transcribe_audio(audio_file):

    audio_file = "./39472_N_Darner_Dr_2.m4a"

    config = aai.TranscriptionConfig(speech_model=aai.SpeechModel.universal)
    transcript = aai.Transcriber(config=config).transcribe(audio_file)

    if transcript.status == "error":
        raise RuntimeError(f"Transcription failed: {transcript.error}")

    return transcript.text

if __name__ == "__main__":
    print(transcribe_audio("./39472_N_Darner_Dr_2.m4a"))