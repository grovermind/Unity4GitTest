#pragma strict
var shader : UnityEngine.Shader;
function Start () {
(this.gameObject).camera.RenderWithShader(shader, "");
(this.gameObject).camera.SetReplacementShader(shader, "");
Debug.Log("!"+(this.gameObject).camera+"!");

}

function Update () {

}