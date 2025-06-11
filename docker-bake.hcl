group "default" {
  targets = ["dockerejemplo"]
}

target "dockerejemplo" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["kaliyn/dockerejemplo:latest"]
}
