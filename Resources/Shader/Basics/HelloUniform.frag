#version 330 core

out vec4 FragColor;

in vec3 ourColor;
in vec2 TexCoord;

uniform sampler2D ourTexture;
uniform float tempo;
uniform vec2 mousePos;

void main()
{
    // efeito de cor baseado no tempo
    vec3 baseColor = texture(ourTexture, TexCoord).rgb;
    vec3 timeColor = vec3(sin(tempo), cos(tempo * 0.5), sin(tempo * 0.7));

    // efeito de cor baseado na posição do mouse
    float distance = length(TexCoord - mousePos);
    float mouseColorFactor = smoothstep(0.2, 0.6, distance);
    vec3 mouseColor = vec3(1.0, 0.0, 0.0); // Vermelho
    vec3 finalColor = mix(baseColor + timeColor, baseColor + mouseColor * mouseColorFactor, 0.5);

    FragColor = vec4(finalColor, 1.0);
}
