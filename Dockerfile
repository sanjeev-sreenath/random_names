FROM python:2-alpine

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

RUN addgroup -g 1000 spin \
    && adduser -u 1000 -G spin -s /bin/bash -D spin

# Set the WORKDIR to /home/spin
USER spin:spin
WORKDIR /home/spin

COPY . .

CMD [ "python", "./random_names.py" ]
