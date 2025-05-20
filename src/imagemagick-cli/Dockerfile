FROM debian:bookworm-slim

RUN apt-get update && \
    apt-get install -y imagemagick bash && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /images

CMD ["bash"]