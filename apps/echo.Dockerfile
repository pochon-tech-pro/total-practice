FROM golang:1.16.3-buster

WORKDIR /app
COPY . /app
WORKDIR /app/echo-app
RUN go mod tidy
RUN go get github.com/cosmtrek/air
CMD ["air"]